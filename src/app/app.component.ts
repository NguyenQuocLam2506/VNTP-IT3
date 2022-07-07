import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular' + VERSION.major;
  // currentProgress = 30;
  // show = false;

  // user = {
  //   name: "Quoc Lam",
  //   age: 22,
  // }
  // users = [];
  // tags = ['angualar','javascript','nodejs']
  // isDanger = false;
  // isWarning = false;
}
