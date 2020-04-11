import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OssProjectsComponent } from './oss-projects.component';

describe('OssProjectsComponent', () => {
  let component: OssProjectsComponent;
  let fixture: ComponentFixture<OssProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OssProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OssProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
