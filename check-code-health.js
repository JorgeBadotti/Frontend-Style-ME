const fs = require('fs');
const path = require('path');

const MAX_LINES = 300;
const EXTENSIONS = ['.js', '.jsx', '.ts', '.tsx'];
const IGNORE_DIRS = ['node_modules', '.git', 'dist', 'build', 'coverage', '.Jules'];

function countLines(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  return content.split('\n').length;
}

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    const dirPath = path.join(dir, f);
    const isDirectory = fs.statSync(dirPath).isDirectory();
    if (isDirectory) {
      if (!IGNORE_DIRS.includes(f)) {
        walkDir(dirPath, callback);
      }
    } else {
      if (EXTENSIONS.includes(path.extname(f))) {
        callback(dirPath);
      }
    }
  });
}

let hasError = false;

console.log('Checking code health...');

walkDir('.', (filePath) => {
  const lines = countLines(filePath);
  if (lines > MAX_LINES) {
    console.error(`ERROR: ${filePath} has ${lines} lines (limit is ${MAX_LINES}).`);
    console.error('VIOLATION: Please apply the Atomic Decomposition Protocol: split logic to hooks and UI to atoms/molecules.');
    hasError = true;
  }
});

if (hasError) {
  process.exit(1);
} else {
  console.log('Code health check passed.');
}
