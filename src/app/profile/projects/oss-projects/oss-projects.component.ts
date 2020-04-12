import {Component, Input, OnInit} from '@angular/core';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-oss-projects',
  templateUrl: './oss-projects.component.html',
  styleUrls: ['./oss-projects.component.scss']
})
export class OssProjectsComponent implements OnInit {

  @Input() title = '';
  @Input() technology = '';
  @Input() img: '';
  @Input() more: string = null;
  @Input() githubLink: string = null;
  closeResult: string;

  constructor(private modalService: NgbModal) {}

  ngOnInit() {}

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result
      .then(result => {
        this.closeResult = `Closed with: ${result}`;
      }, reason => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  getBody() {
    console.log(this.more);
    const arr = this.more.split('\n');
    return this.more.split('\n');
  }
}
