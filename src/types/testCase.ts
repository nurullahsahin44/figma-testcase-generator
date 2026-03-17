// src/types/testCase.ts

// Interface representing a single step in a test case
export interface TestCaseStep {
    stepNumber: number;
    description: string;
    expectedResult: string;
}

// Interface representing a test case
export interface TestCase {
    id: string;
    name: string;
    steps: TestCaseStep[];
    status: 'passed' | 'failed' | 'skipped';
}

// Interface representing a test scenario
export interface TestScenario {
    id: string;
    name: string;
    description: string;
    testCases: TestCase[];
}

// Interface representing a Figma page
export interface FigmaPage {
    id: string;
    name: string;
    components: FigmaComponent[];
}

// Interface representing a Figma component
export interface FigmaComponent {
    id: string;
    name: string;
    properties: Record<string, any>;
}