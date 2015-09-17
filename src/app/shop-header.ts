import {Component, View} from 'angular2/angular2';

@Component({
  selector: 'shop-header',
  properties: ['title']
})
@View({
  styles: [`
    .title {
      font-family: Arial, Helvetica, sans-serif;
    }
    `],
  template: `
    <header>
      <h1 class="title">Hello {{ title }}!</h1>
    </header>
    `
})
export class ShopHeader {
  title;
}
