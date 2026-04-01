import { AboutService } from './about.service';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class MockAboutService implements AboutService {

  getAbout(): Observable<string[]> {

    const about =
      "Hi, I'm Vivek Bhat \u2014 a Principal Software Engineer at EchoStar, where I lead the design of fault-tolerant " +
      "streaming platforms and distributed systems for global satellite connectivity monitoring. I set technical " +
      "standards, drive architectural leadership, and mentor teams to deliver scalable, production-grade solutions.\n" +
      "My work includes building Apache Flink/Kafka pipelines processing 500M+ events daily, automating cloud " +
      "infrastructure with Terraform and CI/CD, and creating AI-driven tooling using vector embeddings and AWS. " +
      "I also engineered full observability systems (metrics, logs, dashboards) to improve reliability and MTTR.\n" +
      "With 8+ years of professional experience, I\u2019ve previously worked with Amazon, Microsoft, and Intel, " +
      "gaining deep expertise across the full software development lifecycle. I\u2019m AWS-certified (Solutions Architect " +
      "& Developer) and hold an MIT Applied Data Science certification. My tech stack includes Java, Python, Go, " +
      "TypeScript, AWS, Kafka, Flink, Kubernetes, Terraform, and Angular. I thrive in Agile environments, value " +
      "clean code, and enjoy rapid prototyping to bring ideas to life quickly.\n" +
      "Outside of work, I enjoy music, soccer, cricket, swimming, and hiking. I\u2019m passionate about innovation and " +
      "always eager to expand my skills and knowledge.\n";


    return of(about.split('\n'));
  }

}
