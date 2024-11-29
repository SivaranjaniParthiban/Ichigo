import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocomplete } from '@angular/material/autocomplete';
import { Observable, startWith, map } from 'rxjs';

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.scss'],
})
export class AutoCompleteComponent implements OnInit {
  @ViewChild('auto') auto!: MatAutocomplete;
  panelOpenState = false;
  myControl = new FormControl(''); 
   myControlSecond= new FormControl('');
  options: string[] = ['Demon Slayer', 'Death Note', 'One Piece', 'Bleach',];
  filteredOptions!: Observable<string[]>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value || ''))
    );
        this.filteredOptions = this.myControlSecond.valueChanges.pipe(
          startWith(''),
          map((value) => this._filter(value || ''))
        );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }
}
