import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  constructor(private dialog: MatDialog) {}
  showpanel!: boolean;
  characterpanel!: boolean;
  showPanel() {
    this.showpanel = true;
    this.characterpanel = false;
  }
  characterPanel() {
    this.characterpanel = true;
    this.showpanel = false;
  }

  ichiClick() {
    //  this.dialog.open(AnimeListSheet,{
    //    width: '150px',
    //    height:'150px',

    //       disableClose: true
    //     })

    let audio = new Audio();
    audio.src =
      'assets/Ringtone One Piece - Brook Laugh - sfrizky (youtube).mp3';
    audio.load();
    audio.play();
  }
}

@Component({
  selector: 'app-bottom-sheet',
  templateUrl: 'anime-list-sheet.html',

  standalone: true,
})
export class AnimeListSheet {}
