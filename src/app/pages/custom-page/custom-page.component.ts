import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-custom-page',
  standalone: true,
  imports: [],
  templateUrl: './custom-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomPageComponent { }
