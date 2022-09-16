import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  contactForm = false;
  appState: any


  updateState(event: string) {
    console.log(event);
    this.appState = event;
  }




}
