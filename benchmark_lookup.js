const { performance } = require('perf_hooks');

const ITERATIONS = 100000;

function benchmarkLookup(numOptions, numSelected) {
    console.log(`\nBenchmark: Lookup for ${numOptions} options with ${numSelected} selected items`);

    // Setup
    const allOptions = Array.from({ length: numOptions }, (_, i) => `option_${i}`);
    // Select first 'numSelected' items
    const selectedArray = allOptions.slice(0, numSelected);
    const selectedSet = new Set(selectedArray);

    // 1. Array Includes
    const startArray = performance.now();
    for (let i = 0; i < ITERATIONS; i++) {
        for (const option of allOptions) {
            // Mimic the component's render loop check
            const isSelected = selectedArray.includes(option);
        }
    }
    const endArray = performance.now();
    const timeArray = endArray - startArray;

    // 2. Set Has
    const startSet = performance.now();
    for (let i = 0; i < ITERATIONS; i++) {
        for (const option of allOptions) {
            // Mimic the component's render loop check
            const isSelected = selectedSet.has(option);
        }
    }
    const endSet = performance.now();
    const timeSet = endSet - startSet;

    console.log(`Array.includes: ${timeArray.toFixed(2)}ms`);
    console.log(`Set.has:        ${timeSet.toFixed(2)}ms`);
    console.log(`Speedup:        ${(timeArray / timeSet).toFixed(2)}x`);
}

// Current scale (5 options, 2 selected)
benchmarkLookup(5, 2);

// Larger scale (e.g., if options grow to 100)
benchmarkLookup(100, 50);

// Even larger scale
benchmarkLookup(1000, 500);
