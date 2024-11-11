import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  template: `
    <header>
      header works!
    </header>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {

}
