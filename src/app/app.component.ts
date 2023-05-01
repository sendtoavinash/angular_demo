import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Tutorial';

  getName() {
    alert(
      'Hello! You\'re on the Angular blog!'
    )
  }

  displayVal: string = '';
  geValue(val: any) {
    console.warn(val)
    this.displayVal = val
  }


}
