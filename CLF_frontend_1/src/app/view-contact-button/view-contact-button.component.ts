import { Component, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-view-contact-button',
  templateUrl: './view-contact-button.component.html',
  styleUrls: ['./view-contact-button.component.css']
})
export class ViewContactButtonComponent implements OnInit {

  @Output()
  appState = new Subject<string>;

  constructor() { }

  ngOnInit(): void {
  }

  onClickHandler() {
    this.appState.next('viewContactList');
  }
}
