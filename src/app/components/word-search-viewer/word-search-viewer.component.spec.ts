import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordSearchViewerComponent } from './word-search-viewer.component';

describe('WordSearchViewerComponent', () => {
  let component: WordSearchViewerComponent;
  let fixture: ComponentFixture<WordSearchViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordSearchViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordSearchViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
