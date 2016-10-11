import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  // [ ] means property binding - C to D
  // ( ) means event binding - D to C
  title = 'Customer App';
  name = 'Ward';
  wardsColor = 'green';

  changeSuitColor() {
    this.wardsColor = this.wardsColor === 'green' ? 'red' : 'green';
  }
}
