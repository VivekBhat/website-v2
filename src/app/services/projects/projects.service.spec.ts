import {TestBed} from '@angular/core/testing';

import {ProjectsService} from './projects.service';

describe('ProjectsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const sut = new ProjectsService();
    expect(sut).toBeTruthy();
  });
});
