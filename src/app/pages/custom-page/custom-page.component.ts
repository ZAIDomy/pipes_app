import { Component, signal } from '@angular/core';
import { toggleCasePipe } from '../../pipes/toggle-case.pipe';
import { heroes } from '../../data/heroes.data';
import { canFlyPipe } from '../../pipes/canFly.pipe';
import { heroColorPipe } from '../../pipes/heroColor.pipe';
import { creatorPipe } from '../../pipes/creator.pipe';
import { heroTextColorPipe } from '../../pipes/hero-text-color.pipe';
import { TitleCasePipe } from '@angular/common';
import { Hero } from '../../interfaces/hero.interface';
import { heroSortByPipe } from '../../pipes/hero-sort-by.pipe';

@Component({
  selector: 'app-custom-page',
  standalone: true,
  imports: [ toggleCasePipe, canFlyPipe, heroColorPipe, creatorPipe, heroTextColorPipe, TitleCasePipe, heroSortByPipe ],
  templateUrl: './custom-page.component.html',
})
export default class CustomPageComponent {
  name = signal('alex diaz');

  upperCase = signal(true);

  toggleSignal(){
    this.upperCase.update(value=>!value);
  }

  heroes = signal(heroes);

  sortBy = signal<keyof Hero | null >(null);


}
