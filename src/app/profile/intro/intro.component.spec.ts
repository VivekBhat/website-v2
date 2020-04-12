import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {IntroComponent} from './intro.component';
import {CommonModule, Location} from '@angular/common';

describe('IntroComponent', () => {
  let component: IntroComponent;
  let fixture: ComponentFixture<IntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IntroComponent],
      imports: [CommonModule],
      providers: [Location]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
