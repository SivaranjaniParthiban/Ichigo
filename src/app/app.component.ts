import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, ElementRef, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('openClose', [
      state(
        'open',
        style({
          width: '270px',
        })
      ),
      state(
        'closed',
        style({
          width: '0px',
        })
      ),
      transition('open => closed', [animate('.25s')]),
      transition('closed => open', [animate('.25s')]),
    ]),
  ],
})
export class AppComponent {
  title = 'Jarvis';
  @ViewChild('drawer', { static: false }) drawer!: MatDrawer;
  @ViewChild('pageContent', { static: false }) pageContent!: ElementRef;
  expanded: boolean = false;
  expandedEvent = new EventEmitter<boolean>();
  hasBackdrop: boolean = false;

  constructor() {
    this.expandedEvent.next(false);
  }
  changedExpanded(changedExpanded: boolean) {
    console.log(changedExpanded)
    this.expanded = changedExpanded;
    this.hasBackdrop = changedExpanded;
    this.expandedEvent.next(this.expanded);
  }

  backdropClicked() {
    this.expanded = false;
    this.hasBackdrop = false;
    this.expandedEvent.next(this.expanded);
  }

  ngAfterViewInit(): void {
    const pageContentEl = this.pageContent.nativeElement as HTMLElement;
    pageContentEl.style.marginLeft = '50px';
    this.expandedEvent.next(false);
  }
}
