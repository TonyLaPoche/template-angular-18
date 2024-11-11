import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  template: `
    <footer>
      footer works!
    </footer>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {

}
