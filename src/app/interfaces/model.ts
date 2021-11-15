export interface WordSearchGeneratorParams {
    words: string[];
    width: number;
    height: number;
}

export interface WordSearch {
    lines: string[],
    solutionLines: string[],
    words: string[]
}
