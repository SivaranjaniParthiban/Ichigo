import { Component, inject } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.scss'],
})
export class BottomSheetComponent {
  private _bottomSheet = inject(MatBottomSheet);
  openAnimeList(): void {
    this._bottomSheet.open(AnimeListSheet, {
      panelClass:'custom-width'
    });
    
  }
}


@Component({
  selector: 'app-bottom-sheet',
  templateUrl: 'anime-list-sheet.html',
  imports: [MatListModule],
  standalone: true
})
export class AnimeListSheet {
  private _bottomSheetRef =
    inject<MatBottomSheetRef<AnimeListSheet>>(MatBottomSheetRef);

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
  }
}