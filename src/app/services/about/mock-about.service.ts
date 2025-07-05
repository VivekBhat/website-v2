import { AboutService } from './about.service';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class MockAboutService implements AboutService {

  getAbout(): Observable<string[]> {

    const about =
      "Hi, I'm Vivek Bhat — a Senior Software Engineer at Hughes, where I lead AI/ML and data science efforts for " +
      "customers in the satellite internet domain. I devised software development strategies, defined engineering " +
      "processes, and delivered scalable, production-grade solutions from the ground up.\n" +
      "My work includes collaborating with stakeholders to gather requirements, building real-time Flink applications " +
      "for streaming analytics, and implementing CI/CD pipelines to streamline development. I also optimized AWS " +
      "infrastructure monitoring, reducing costs by 65% and saving over $4K per month.\n" +
      "With around 8 years of professional experience, I’ve previously worked with Amazon, Microsoft, and Intel, " +
      "gaining deep expertise across the full software development lifecycle. My tech stack includes Java, AWS, Apache " +
      "Hadoop, HDFS, HBase, NiFi, Angular, HTML, CSS, and TypeScript. I thrive in Agile environments, value clean code, " +
      "and enjoy rapid prototyping to bring ideas to life quickly.\n" +
      "Outside of work, I enjoy music, soccer, cricket, swimming, and hiking. I’m passionate about innovation and " +
      "always eager to expand my skills and knowledge.\n";


    return of(about.split('\n'));
  }

}
