import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  about1 = '' +
    'I am Full Stack Developer specializing in 3 tier web applications. ';

  about2 =
    'I have experience with all stages of the development cycle for dynamic web projects, ' +
    '2.5 years of progressive experience in Angular, HTML, CSS, Typescript developer.' +
    'My team works in an Agile environment, possess creative Design Thinking skills and dedicated to work effectively in ' +
    'dynamic environments. ';
  about3 = 'In my free time I love listening to music, playing soccer, cricket, swimming and hiking.';

  about4 = 'Lover of innovation and everything related to generate new knowledge. ' +
    'Face problems with a smile and solve them as soon as possible. Very calculated about the time I spend and work I do.\n';

  constructor() {
  }

  ngOnInit() {
  }

}
