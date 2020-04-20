import {AboutService} from './about.service';
import {Observable, of} from 'rxjs';
import { Injectable } from "@angular/core";

@Injectable()
export class MockAboutService implements AboutService {

  getAbout(): Observable<string[]> {
    const about =
      'I am an AWS Certified Solutions Architect and Developer Associate specializing in three-tier web applications. \n' +
      'I have experience with all stages of the development cycle for dynamic web projects, ' +
      '2.5 years of progressive experience in Angular, HTML, CSS, Typescript development. ' +
      'We work in an Agile environment, possess creative design thinking skills and dedicated to work effectively in ' +
      'dynamic environments. \n' +
      'In my free time I love listening to music, playing soccer, cricket, swimming and go hiking. ' +
      'I am a lover of innovation and everything that would increase my set of skills and knowledge. \n' +
      'I face problems with a smile and solve quickly. Very calculative about the work I do and time I spend. \n';

    const arr: string[] = about.split('\n');
    return of(arr);
  }

}
