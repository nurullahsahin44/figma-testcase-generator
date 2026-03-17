// src/index.ts

import { FigmaAPI } from './api/figma';
import { TestGenerator } from './test/generator';
import { CsvExporter } from './exporter/csv';

async function main() {
    // Initialize Figma API client
    const figmaClient = new FigmaAPI();

    // Fetch Figma data
    const figmaData = await figmaClient.getFigmaData();

    // Generate tests from Figma data
    const tests = TestGenerator.generateTests(figmaData);

    // Export tests to CSV
    CsvExporter.exportToCsv(tests, 'output/tests.csv');
}

// Execute main function
main().catch(error => {
    console.error('Error during execution:', error);
});
