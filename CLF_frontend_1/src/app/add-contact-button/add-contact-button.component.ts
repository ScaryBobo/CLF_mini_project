import { Component, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-add-contact-button',
  templateUrl: './add-contact-button.component.html',
  styleUrls: ['./add-contact-button.component.css']
})
export class AddContactButtonComponent implements OnInit {

  @Output()
  appState = new Subject<string>;

  constructor() { }

  ngOnInit(): void {
  }

  onClickHandler(){
    this.appState.next('addContact');
  }
}
