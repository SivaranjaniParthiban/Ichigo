import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccordianComponent } from './accordian/accordian.component';
import { AppComponent } from './app.component';
import { AutoCompleteComponent } from './auto-complete/auto-complete.component';
import { BadgeComponent } from './badge/badge.component';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';
import { ButtonComponent } from './button/button.component';
import { ButtonToggleComponent } from './button-toggle/button-toggle.component';
import { CardComponent } from './card/card.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'AppComponent',
  },
  {
    path: 'accordion',
    component: AccordianComponent,
  },
  {
    path: 'autocomplete',
    component: AutoCompleteComponent,
  },
  {
    path: 'badge',
    component: BadgeComponent,
  },

  {
    path: 'bottom-sheet',
    component: BottomSheetComponent,
  },
  {
    path: 'button',
    component: ButtonComponent,
  },
  {
    path: 'toggle',
    component: ButtonToggleComponent,
  },
  {
    path: 'card',
    component:CardComponent,
  },
  // {
  //   path: '',
  //   component: AppComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
