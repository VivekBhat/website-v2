import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
  providers: [Location]

})
export class IntroComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {}

  onClick(id: string) {
    id = '#' + id;
    const element = document.querySelector(id);
    if (element) {
      this.location.replaceState(id);
      element.scrollIntoView({behavior: 'smooth', block: 'start'});
    }
  }
}
