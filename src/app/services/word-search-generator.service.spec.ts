import { TestBed } from '@angular/core/testing';

import { WordSearchGeneratorService } from './word-search-generator.service';

describe('WordSearchGeneratorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WordSearchGeneratorService = TestBed.get(WordSearchGeneratorService);
    expect(service).toBeTruthy();
  });
});
