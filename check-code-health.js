const fs = require('fs');
const path = require('path');

// Configurações da "Skill"
const MAX_LINES = 300;
const TARGET_DIR = './components'; // Adjusted to match project structure
const EXTENSIONS = ['.tsx', '.ts'];

/**
 * Conta as linhas de um arquivo
 */
function countLines(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  return content.split('\n').length;
}

/**
 * Percorre as pastas recursivamente
 */
function walk(dir, callback) {
  fs.readdirSync(dir).forEach( f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walk(dirPath, callback) : callback(path.join(dir, f));
  });
}

console.log(`\x1b[35m%s\x1b[0m`, `--- 🛡️ Verificando Saúde da Arquitetura Atômica ---`);

let totalFiles = 0;
let problematicFiles = 0;

if (fs.existsSync(TARGET_DIR)) {
  walk(TARGET_DIR, (filePath) => {
    if (EXTENSIONS.includes(path.extname(filePath))) {
      totalFiles++;
      const lines = countLines(filePath);

      if (lines > MAX_LINES) {
        problematicFiles++;
        console.log(`\x1b[31m%s\x1b[0m`, `⚠️  ALERTA: ${filePath} tem ${lines} linhas.`);
        console.log(`   💡 Ação: Extrair lógica para .hooks.ts ou subdividir em Atoms/Molecules.`);
      }
    }
  });
} else {
    console.log(`\x1b[33m%s\x1b[0m`, `⚠️  Target directory ${TARGET_DIR} not found.`);
}

// Check App.tsx and index.tsx specifically as they are in root
['./App.tsx', './index.tsx'].forEach(file => {
    if (fs.existsSync(file)) {
        totalFiles++;
        const lines = countLines(file);
        if (lines > MAX_LINES) {
            problematicFiles++;
            console.log(`\x1b[31m%s\x1b[0m`, `⚠️  ALERTA: ${file} tem ${lines} linhas.`);
            console.log(`   💡 Ação: Extrair lógica para .hooks.ts ou subdividir em Atoms/Molecules.`);
        }
    }
});


if (problematicFiles === 0) {
  console.log(`\x1b[32m%s\x1b[0m`, `✅ Tudo limpo! Todos os ${totalFiles} arquivos estão abaixo de ${MAX_LINES} linhas.`);
} else {
  console.log(`\n\x1b[33m%s\x1b[0m`, `Total de arquivos críticos: ${problematicFiles}`);
}

console.log(`--- 🏁 Fim da Verificação ---`);
