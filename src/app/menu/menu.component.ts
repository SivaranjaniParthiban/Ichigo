import { AfterViewInit, Component, EventEmitter, Input, Output } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
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
  user: any;
  userdetails: any;
  constructor(private router: Router, public fbAuth: AngularFireAuth) {  this.user = fbAuth.authState;
  this.user.subscribe((res: any) => {
    this.userdetails = res;
  });
  
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

  logout() {
    console.log('Logout');
    this.fbAuth.signOut();
  }
}


