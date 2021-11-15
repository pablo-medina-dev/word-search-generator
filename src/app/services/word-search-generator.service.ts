import { Injectable } from '@angular/core';
import wordsearch from 'wordsearch-generator';
import { WordSearchGeneratorParams, WordSearch } from '../interfaces/model';

@Injectable({
  providedIn: 'root'
})
export class WordSearchGeneratorService {

  constructor() { }

  generate(params: WordSearchGeneratorParams): WordSearch {
    let puzzleGrid = wordsearch.createPuzzle(
      params.width,
      params.height,
      'en',
      params.words
    );

    const solutionLines = wordsearch.printGrid(puzzleGrid, ' ');
    puzzleGrid = wordsearch.hideWords(puzzleGrid, 'en');
    const lines = wordsearch.printGrid(puzzleGrid);

    const result: WordSearch = {
      lines,
      solutionLines,
      words: [...params.words]
    }

    return result;
  }
}
