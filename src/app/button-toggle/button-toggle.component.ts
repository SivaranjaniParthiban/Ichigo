import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-button-toggle',
  templateUrl: './button-toggle.component.html',
  styleUrls: ['./button-toggle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonToggleComponent {
  // onclick(event: Event) {
  //   console.log(event.target);
  // }

}
