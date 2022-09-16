import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-add-contact-form',
  templateUrl: './add-contact-form.component.html',
  styleUrls: ['./add-contact-form.component.css']
})
export class AddContactFormComponent implements OnInit {

  @Output()
  appState = new Subject<string>;

  
  contactForm !: FormGroup

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.contactForm = this.createForm();
  }

  private createForm(): FormGroup{
    return this.fb.group({
      name: this.fb.control<string>('', Validators.minLength(3)),
      email: this.fb.control<string>('', Validators.email),
      mobile: this.fb.control<number>(0, Validators.minLength(8))
    })
  }

  addContact(){
    //Input svc method

    this.appState.next('viewContactList');
  }

}
