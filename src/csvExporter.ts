import { Parser } from 'json2csv';

// Sample test cases interface
interface TestCase {
    id: string;
    name: string;
    description: string;
    steps: string[];
    expected: string;
}

// Function to export test cases to CSV
export function exportToCSV(testCases: TestCase[]): string {
    const fields = ['id', 'name', 'description', 'steps', 'expected'];
    const json2csvParser = new Parser({ fields });
    const csv = json2csvParser.parse(testCases);
    return csv;
}