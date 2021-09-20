import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavethedateComponent } from './savethedate.component';

describe('SavethedateComponent', () => {
  let component: SavethedateComponent;
  let fixture: ComponentFixture<SavethedateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavethedateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavethedateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
