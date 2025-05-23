import { Component, signal } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { I18nSelectPipe } from '@angular/common';

const client1={
  name: 'Alex',
  gender: 'male',
  age: 35,
  address: 'Ottawa, Canada'
}
const client2={
  name: 'Ely',
  gender: 'female',
  age: 33,
  address: 'Ottawa, Canada'
}

@Component({
  selector: 'app-uncommon-page',
  standalone: true,
  imports: [CardComponent,I18nSelectPipe],
  templateUrl: './uncommon-page.component.html',
})
export default class UncommonPageComponent {

  //i18n select
  client=signal(client1);

  invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  }

  changeClient(){
    if (this.client()===client1) {
      this.client.set(client2);
      return;
    }
    this.client.set(client1);
  }
}
