import { Component, signal } from '@angular/core';
import { toggleCasePipe } from '../../pipes/toggle-case-pipe';

@Component({
  selector: 'app-custom-page',
  standalone: true,
  imports: [toggleCasePipe],
  templateUrl: './custom-page.component.html',
})
export default class CustomPageComponent {
  name = signal('alex diaz');

  upperCase = signal(true);

  toggleSignal(){
    this.upperCase.update(value=>!value);
  }


}
