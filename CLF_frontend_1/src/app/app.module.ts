import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddContactButtonComponent } from './add-contact-button/add-contact-button.component';
import { ViewContactButtonComponent } from './view-contact-button/view-contact-button.component';
import { AddContactFormComponent } from './add-contact-form/add-contact-form.component';
import { ViewContactListviewComponent } from './view-contact-listview/view-contact-listview.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddContactButtonComponent,
    ViewContactButtonComponent,
    AddContactFormComponent,
    ViewContactListviewComponent
  ],
  imports: [
    BrowserModule, ReactiveFormsModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
