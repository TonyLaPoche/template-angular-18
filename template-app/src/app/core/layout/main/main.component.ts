import { ChangeDetectionStrategy, Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  template: `
    <main>
      <router-outlet></router-outlet>
    </main>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent {

}
