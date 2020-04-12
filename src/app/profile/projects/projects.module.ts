import {NgModule} from '@angular/core';
import {ProjectsComponent} from './projects.component';
import {OssProjectsComponent} from './oss-projects/oss-projects.component';
import {CommonModule} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    NgbModule
  ],
  declarations: [
    ProjectsComponent,
    OssProjectsComponent
  ],
  exports: [ProjectsComponent],
  providers: []
})
export class ProjectsModule {
}
