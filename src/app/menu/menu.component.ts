import { AfterViewInit, Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements AfterViewInit {
  @Input() expanded!: EventEmitter<boolean>;
  @Output() changedExpanded = new EventEmitter<boolean>();
  isExpanded = false;
  constructor(private router :Router) {
  
}
  collapseMenu() {
    this.isExpanded = false;
    console.log(this.isExpanded);
    this.setChangeExpanded();
  }

  ngAfterViewInit(): void {
    this.expanded.subscribe((val) => {
      this.isExpanded = val;
    });
  }

  setChangeExpanded() {
    if (this.isExpanded) {
      this.changedExpanded.next(true);
    }
    if (!this.isExpanded) {
      this.changedExpanded.next(false);
    }
  }
}


