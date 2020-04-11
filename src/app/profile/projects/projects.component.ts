import {Component, OnInit} from '@angular/core';

interface Oss {
  title: string;
  technology: string;
  imgName: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  ossProjects: Oss[] = [];

  constructor() {}

  ngOnInit() {
    this.ossProjects = [
      {
        title: 'Expertiza Docker Image',
        technology: 'Docker, Bash scripts, GitHub',
        imgName: 'expertiza_1'
      }, {
        title: 'Expertiza Log Visualization',
        technology: 'Elasticache, Logstash, Kibana',
        imgName: 'expertiza_2'
      }, {
        title: 'Expertiza Wiki Page',
        technology: 'Documentation and Wikipedia styling',
        imgName: 'expertiza_3'
      },
    ];
  }

}
