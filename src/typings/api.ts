export interface AssistantAPI {
    replaceStringInFile: (pathToFile: string, stringPattern: RegExp | string, newString: string) => Promise<void>;
    copyDir: (pathToDir: string, pathToNewDir: string) => Promise<void>;
    readFile: (fileLocation: string) => Promise<string>;
    writeFile: (newFileLocation: string, contents:any) => Promise<void>;
} 