import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  ViewChild,
} from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { MatDrawer } from '@angular/material/sidenav';
import { GoogleAuthProvider } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import * as firebase from 'firebase/compat/app';

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
  user: Observable<firebase.default.User | null>;
  userdetails!: firebase.default.User | null;
  expanded: boolean = false;
  expandedEvent = new EventEmitter<boolean>();
  hasBackdrop: boolean = false;
  provider = new GoogleAuthProvider();

  constructor(public fbAuth: AngularFireAuth) {
    this.expandedEvent.next(false);
    this.user = fbAuth.authState;
    this.user.subscribe((res) => {
      this.userdetails = res;
    });
  }
  changedExpanded(changedExpanded: boolean) {
    console.log(changedExpanded);
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

  // firebaseUiAuthConfig: firebaseui.auth.Config = {
  //   signInFlow: 'popup',
  //   signInOptions: [
  //     firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  //     {
  //       scopes: ['public_profile', 'email', 'user_likes', 'user_friends'],
  //       customParameters: {
  //         auth_type: 'reauthenticate',
  //       },
  //       provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID,
  //     },
  //     firebase.auth.TwitterAuthProvider.PROVIDER_ID,
  //     firebase.auth.GithubAuthProvider.PROVIDER_ID,
  //     {
  //       requireDisplayName: false,
  //       provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
  //     },
  //     firebase.auth.PhoneAuthProvider.PROVIDER_ID,
  //     firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID,
  //   ],
  //   //term of service
  //   tosUrl: '<your-tos-link>',
  //   //privacy url
  //   privacyPolicyUrl: '<your-privacyPolicyUrl-link>',
  //   //credentialHelper:             firebaseui.auth.CredentialHelper.ACCOUNT_CHOOSER_COM
  //   credentialHelper: firebaseui.auth.CredentialHelper.NONE,
  // };

  // constructor(
  //   private angularFireDB: AngularFireDatabase,
  //   public afAuth: AngularFireAuth
  // ) {
  //   this.user = afAuth.authState;
  //   this.user.subscribe((res) => {
  //     this.userdetails = res;
  //   });
  // }

  login() {
    this.fbAuth.signInWithPopup(new firebase.default.auth.GoogleAuthProvider());
  }


}
