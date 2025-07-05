import { AboutService } from './about.service';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class MockAboutService implements AboutService {

  getAbout(): Observable<string[]> {

    const about =
      'Hi, I\'m Vivek Bhat - a Software Engineer at Amazon, where I design and build clean, scalable, and resilient microservices for the Same Day Delivery team. ' +
      'I am an AWS Certified Developer and Solutions Architect with hands-on experience in designing, developing, and deploying AI and Big Data solutions in fast-paced Agile environments. ' +
      'I take pride in writing clean code and am passionate about rapid prototyping to deliver quick and effective proof-of-concepts.\n' +
      'With over 6 years of progressive experience, I have worked across the full software development lifecycle using technologies such as Java, AWS, Apache Hadoop, HDFS, HBase, NiFi, Angular, HTML, CSS, and TypeScript. \n' +
      'I thrive in Agile teams, bringing creative design thinking and a strong commitment to delivering high-quality solutions in dynamic settings.\n' +
      'Outside of work, I enjoy listening to music, playing soccer and cricket, swimming, and hiking. I\'m always eager to explore innovations that expand my skill set and knowledge base.\n' +
      'I approach challenges with a positive mindset and solve problems efficiently. I value time and strive to make every moment count in the work I do.\n';
    const arr: string[] = about.split('\n');
    return of(arr);
  }

}
