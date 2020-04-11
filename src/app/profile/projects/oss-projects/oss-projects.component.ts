import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-oss-projects',
  templateUrl: './oss-projects.component.html',
  styleUrls: ['./oss-projects.component.scss']
})
export class OssProjectsComponent implements OnInit {

  @Input() title = '';
  @Input() technology = '';
  @Input() img: '';

  constructor() { }

  ngOnInit() {
  }

}
