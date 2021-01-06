import {AboutService} from './about.service';
import {Observable, of} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()
export class MockAboutService implements AboutService {

  getAbout(): Observable<string[]> {
    const about =
      'I am an AWS Certified Developer and Solutions Architect with experience designing, developing and deploying AI and Big Data ' +
      'solutions in an Agile environment. I am an avid clean coder who is adept at rapid prototyping for fast turnaround times in POCs.\n' +
      'I have rich experience with all stages of the software development life cycle, ' +
      'more than 3 years of progressive experience in Java, Apache Hadoop, Big Data, HDFS, HBase, NiFi, Angular, HTML, CSS ' +
      'and Typescript development. \n' +
      'I have been working in an Agile environment and possess creative design thinking skills and dedicated to work effectively in ' +
      'dynamic environments. \n' +
      'In my free time I love listening to music, playing soccer, cricket, swimming and go hiking. ' +
      'I am a lover of innovation and everything that would increase my set of skills and knowledge. \n' +
      'I face problems with a smile and solve quickly. Very calculative about the work I do and time I spend. \n';

    const arr: string[] = about.split('\n');
    return of(arr);
  }

}
