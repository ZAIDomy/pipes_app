import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-numbers-page',
  standalone: true,
  imports: [],
  templateUrl: './numbers-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class NumbersPageComponent { }
