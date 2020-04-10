import {Component, OnInit} from '@angular/core';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  ids: Array<string> = ['one', 'two', 'three', 'four'];

  constructor(private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.spinner.show().then(() => {
      setTimeout(() => {
        this.spinner.hide();
      }, 500);
    });
  }

}
