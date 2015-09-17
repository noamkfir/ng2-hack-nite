import {Component, View} from 'angular2/angular2';
import {EventEmitter} from 'angular2/angular2';
//import EventEmitter = ng.EventEmitter;
//import * from 'angul'


@Component({
  selector: 'shop-body',
  properties: ['title'],
  events: ['titlechanged']
})
@View({
  template: `
    <main>
      Your Content Here
      <div>

        <input type="text" [value]="title" (input)="titleChangedInternal($event.target.value)" autofocus>
        <!--
          Rather than wiring up two-way data-binding ourselves
          we can use Angular's [(ng-model)] syntax
          <input type="text" [(ng-model)]="title">
        -->
      </div>

      <pre>this.title = {{ title | json }}</pre>
      <pre>this.data = {{ data | json }}</pre>

    </main>
  `
})
export class ShopBody {
  title;
  titlechanged: EventEmitter;

  constructor() {
    this.titlechanged = new EventEmitter();
  }

  titleChangedInternal(title) {
    this.title = title;
    this.titlechanged.next(title);
  }
}
