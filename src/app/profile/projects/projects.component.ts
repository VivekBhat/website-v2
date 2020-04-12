import {Component, OnInit} from '@angular/core';

interface Oss {
  title: string;
  technology: string;
  imgName: string;
  gitHubLink: string;
}

interface OtherProjects {
  data: Oss;
  modalData: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  ossProjects: Oss[] = [];
  modalBody = '';
  otherProjects: OtherProjects[] = [];

  constructor() {}

  ngOnInit() {
    this.setOssProjects();
    this.otherProjects = [
      {
        data: {
          title: 'Kubernetes Deployments',
          imgName: 'other_1',
          technology: 'Kubernetes, Docker, Vagrant',
          gitHubLink: 'kubernetes-deployment'
        },
        modalData: ' In this project I created an ansible script to configure a ' +
          'server running Jenkins and build a project. \n' +
          'In this project the following tasks were done:\n' +
          ' 1. Using ansible, be able to automatically configure a server running jenkins.\n' +
          ' 2. Setup necessary runtime packages automatically.\n' +
          ' 3. Be able to setup jenkins configuration files automatically.\n' +
          ' 4. Be able to automatically setup a job to build this repo'
      }];
  }

  setOssProjects() {
    this.ossProjects = [
      {
        title: 'Expertiza Docker Image',
        technology: 'Docker, Bash scripts, GitHub',
        imgName: 'expertiza_1',
        gitHubLink: 'expertiza'
      }, {
        title: 'Expertiza Log Visualization',
        technology: 'Elasticache, Logstash, Kibana',
        imgName: 'expertiza_2',
        gitHubLink: 'expertiza'

      }, {
        title: 'Expertiza Wiki Page',
        technology: 'Documentation and Wikipedia styling',
        imgName: 'expertiza_3',
        gitHubLink: 'expertiza'
      },
    ];
  }
}
