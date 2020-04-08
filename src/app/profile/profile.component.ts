import {Component, OnInit} from '@angular/core';
import {NgxSpinnerService} from '../../../node_modules/ngx-spinner';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.spinner.show().then(() => {
      setTimeout(() => {
        this.spinner.hide();
      }, 500);
    });
  }

}
