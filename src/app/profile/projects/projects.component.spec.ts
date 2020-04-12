import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ProjectsComponent} from './projects.component';
import {ProjectsService, ProjectsServiceToken} from '../../services/projects/projects.service';
import {OssProjectsComponent} from './oss-projects/oss-projects.component';

describe('ProjectsComponent', () => {
  let component: ProjectsComponent;
  let fixture: ComponentFixture<ProjectsComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectsComponent, OssProjectsComponent],
      providers: [
        {provide: ProjectsServiceToken, useClass: ProjectsService}
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
