import {Observable, of} from 'rxjs';
import {Project} from '../../models/project/project';
import {InjectionToken} from '@angular/core';

export const ProjectsServiceToken = new InjectionToken<ProjectsService>('ProjectsService');

export class ProjectsService {
  getOssProjects(): Observable<Project[]> {
    return of([
      {
        title: 'Expertiza Docker Image',
        technology: 'Docker, Bash scripts, GitHub',
        imgName: 'expertiza_1',
        gitHubLink: 'expertiza',
        moreData: '',
      }, {
        title: 'Expertiza Log Visualization',
        technology: 'Elasticache, Logstash, Kibana',
        imgName: 'expertiza_2',
        gitHubLink: 'expertiza',
        moreData: '',
      }, {
        title: 'Expertiza Wiki Page',
        technology: 'Documentation and Wikipedia styling',
        imgName: 'expertiza_3',
        gitHubLink: 'expertiza',
        moreData: ''
      },
    ]);
  }

  getOtherProjects(): Observable<Project[]> {
    return of([
        {
          title: 'Kubernetes Local Deployments',
          imgName: 'other_1',
          technology: 'Kubernetes, Docker, Vagrant',
          gitHubLink: 'kubernetes-deployment',
          moreData: ' In this project I created an ansible script to configure a ' +
            'server running Jenkins and build a project. \n' +
            'In this project the following tasks were done:\n' +
            ' 1. Using ansible, be able to automatically configure a server running jenkins.\n' +
            ' 2. Setup necessary runtime packages automatically.\n' +
            ' 3. Be able to setup jenkins configuration files automatically.\n' +
            ' 4. Be able to automatically setup a job to build this repo'
        }, {
          title: 'Serverless Thumbnail Generator',
          imgName: 'other_1',
          technology: 'Serverless, AWS, Vagrant',
          gitHubLink: 'serverless-thumbnail-aws',
          moreData: ' In this project I am using the serverless deployment template to deploy a serverless app. \n' +
            'Once an image is uploaded to the S3 bucket a Thumbnail of the same image will be created and uploaded in ' +
            'the same bucket with a _thumbnail suffix\n'
        }
      ]
    );
  }
}
