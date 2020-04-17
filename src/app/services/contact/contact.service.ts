import {InjectionToken} from '@angular/core';
import {Observable} from 'rxjs';
import {Contact} from '../../models/contact';
import {FormspreeResponse} from '../../models/response/formspree.response';
import {IpInfo} from '../../models/ip-info/ip-info';

export const ContactServiceToken = new InjectionToken<ContactService>('ContactService');

export interface ContactService {


  contactForm(contact: Contact): Observable<FormspreeResponse>;

  getClientInfo(): Observable<IpInfo>;
}
