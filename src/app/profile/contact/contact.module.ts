import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ContactComponent} from './contact.component';
import {ContactServiceToken} from '../../services/contact/contact.service';
import {BackendContactService} from '../../services/contact/backend-contact.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  declarations: [
    ContactComponent
  ],
  exports: [ContactComponent],
  providers: [
    {provide: ContactServiceToken, useClass: BackendContactService}
  ]
})
export class ContactModule {
}
