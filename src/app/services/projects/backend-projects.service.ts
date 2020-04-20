import {Observable, of} from 'rxjs';
import {Project} from '../../models/project/project';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class BackendProjectsService {
  constructor(private http: HttpClient) { }

  getOssProjects(): Observable<Project[]> {
    return of([
      {
        title: 'Expertiza Docker Image',
        technology: 'Docker, Bash scripts, GitHub',
        imgName: 'expertiza_1',
        gitHubLink: 'expertiza',
        readmeLink: '',
      }, {
        title: 'Expertiza Log Visualization',
        technology: 'Elasticache, Logstash, Kibana',
        imgName: 'expertiza_2',
        gitHubLink: 'expertiza',
        readmeLink: '',
      }, {
        title: 'Expertiza Wiki Page',
        technology: 'Documentation and Wikipedia styling',
        imgName: 'expertiza_3',
        gitHubLink: 'expertiza',
        readmeLink: ''
      },
    ]);
  }

  getReadme(path: string): Observable<string> {
    return this.http.get(path, {responseType: 'text'});
  }

  getOtherProjects(): Observable<Project[]> {
    return of([
        {
          title: 'Kubernetes Local Deployments',
          imgName: 'other_1',
          technology: 'Kubernetes, Docker, Vagrant',
          gitHubLink: 'kubernetes-deployment',
          readmeLink: 'https://raw.githubusercontent.com/VivekBhat/kubernetes-deployment/master/Readme.md'
        }, {
          title: 'Serverless Thumbnail Generator',
          imgName: 'other_thumbnail_generator',
          technology: 'Serverless, AWS, Vagrant',
          gitHubLink: 'serverless-thumbnail-aws',
          readmeLink: 'https://raw.githubusercontent.com/VivekBhat/serverless-thumbnail-aws/master/Readme.md'
        }, {
          title: 'Serverless REST API Using AWS',
          imgName: 'serverless-nodejs-dynamodb-rest-api',
          technology: 'AWS API Gateway, Lambda, DynamoDB, NodeJS',
          gitHubLink: 'serverless-nodejs-dynamodb-rest-api',
          readmeLink: 'https://raw.githubusercontent.com/VivekBhat/serverless-nodejs-dynamodb-rest-api/master/README.md'
        }
      ]
    );
  }
}
