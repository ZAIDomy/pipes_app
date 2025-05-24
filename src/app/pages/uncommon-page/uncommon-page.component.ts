import { Component, signal } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { I18nPluralPipe, I18nSelectPipe, JsonPipe, KeyValuePipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';

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
  address: 'Toronto, Canada'
}

@Component({
  selector: 'app-uncommon-page',
  standalone: true,
  imports: [CardComponent,I18nSelectPipe,I18nPluralPipe,SlicePipe,JsonPipe,UpperCasePipe,KeyValuePipe,TitleCasePipe],
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

  //i18nplural
  clientsMap= signal({
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos 1 cliente esperando',
    '=2': 'tenemos 2 clientes esperando',
    other: 'tenemos # clientes esperando',
  });

  clients=signal([
    'ely',
    'alex',
    'amaury',
    'lulu',
    'josue',
    'itzel',
    'nikki',
    'luna',
  ]);

  ereaseClient(){
    this.clients.update(prev=>prev.slice(1));
  }

  //keyvaluepipe
  profile = {
    name: 'Alex',
    age: 35,
    address: 'CMDX, Mexico',

  }





}
