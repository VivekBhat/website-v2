import {Component, Inject, OnInit} from '@angular/core';
import {ContactService, ContactServiceToken} from '../../services/contact/contact.service';
import {Contact} from '../../models/contact';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AboutService, AboutServiceToken} from '../../services/about/about.service';
import {BackendContactService} from '../../services/contact/backend-contact.service';

// https://www.truecodex.com/course/angular-project-training/create-contact-form-and-send-data-on-email-angular

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {


  model: Contact;
  submitted = false;
  success = false;
  error: {};
  name = new FormControl('');
  contactFormGroup: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    name: new FormControl('', [Validators.required]),
    message: new FormControl('', [Validators.required]),
    phoneNumber: new FormControl('', [Validators.required]),
  });

  constructor(@Inject(ContactServiceToken) private contactService: ContactService) { }

  ngOnInit() {
  }


  onSubmit() {
    this.submitted = true;
    console.log(this.contactFormGroup);
    const getVal = field => this.contactFormGroup.get(field).value;
    this.model = new Contact(
      getVal('name'),
      getVal('email'),
      getVal('phoneNumber'),
      getVal('message'));
    console.log(this.model);
    return this.contactService.contactForm(this.model).subscribe(
      () => {
        this.success = true;
        this.contactFormGroup.reset();
      },
      error => this.error = error
    );
  }

}
