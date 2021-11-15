import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { distinctUntilChanged } from 'rxjs/operators';
import { WordSearch, WordSearchGeneratorParams } from 'src/app/interfaces/model';
import { WordSearchGeneratorService } from 'src/app/services/word-search-generator.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  form: FormGroup;
  generated: WordSearch | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private generatorService: WordSearchGeneratorService,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.form = this.formBuilder.group(
      {
        words: new FormControl('', { validators: Validators.required, updateOn: 'change' }),
        width: new FormControl(24, { validators: Validators.required, updateOn: 'blur' }),
        height: new FormControl(25, { validators: Validators.required, updateOn: 'blur' })
      }
    );

    this.form.get('words').valueChanges
      .pipe(
        distinctUntilChanged()
      )
      .subscribe((value: string) => {
        this.form.get('words').patchValue(value.toUpperCase());
      })
  }

  generarSopa() {
    if (this.form.valid) {
      const fv = this.form.value;

      // Get text area lines as rows
      const wordsArray: string[] = fv.words.split(/\n/);

      // Remove spaces from each row
      const rawWordsArray: string[] = [];
      wordsArray.forEach(word => {
        rawWordsArray.push(word.replace(/ /g, ''));
      });

      // Convert array to set to avoid repetitions
      const wordsSet = new Set<string>(wordsArray);

      // Rebuild words array from set
      const parsedWords = [...wordsSet.keys()];

      const params: WordSearchGeneratorParams = {
        height: fv.height,
        width: fv.width,
        words: parsedWords
      }
      try {
        const generatedWordSearch = this.generatorService.generate(params);
        this.generated = generatedWordSearch;
      } catch (error) {
        console.error(JSON.stringify(error));
        this.showMessage(error);
      }

    }
  }

  showMessage(message: string) {
    this.snackBar.open(message, 'OK', { duration: 1500 });
  }

}
