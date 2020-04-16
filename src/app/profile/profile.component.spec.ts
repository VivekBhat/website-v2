import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ProfileComponent} from './profile.component';
import {ProfileModule} from './profile.module';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {BuildInformationToken} from '../services/build-information';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      // declarations: [ProfileModule],
      imports: [ProfileModule, NoopAnimationsModule],
      providers: [{provide: BuildInformationToken, useValue: {}}]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
