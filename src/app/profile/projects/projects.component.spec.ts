import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ProjectsComponent} from './projects.component';
import {OssProjectsComponent} from './oss-projects/oss-projects.component';
import {ProjectsServiceToken} from '../../services/projects/projects.service';
import {MockProjectsService} from '../../services/projects/mock-projects.service';

describe('ProjectsComponent', () => {
  let component: ProjectsComponent;
  let fixture: ComponentFixture<ProjectsComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectsComponent, OssProjectsComponent],
      providers: [
        {provide: ProjectsServiceToken, useClass: MockProjectsService}
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
