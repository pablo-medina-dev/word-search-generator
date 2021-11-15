import { Component, Input, OnInit } from '@angular/core';
import { WordSearch } from 'src/app/interfaces/model';

@Component({
  selector: 'word-search-viewer',
  templateUrl: './word-search-viewer.component.html',
  styleUrls: ['./word-search-viewer.component.scss']
})
export class WordSearchViewerComponent implements OnInit {
  @Input()
  value: WordSearch;

  constructor() { }

  ngOnInit() {
  }

}
