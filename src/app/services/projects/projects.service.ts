import {InjectionToken} from '@angular/core';
import {Observable} from 'rxjs';

export const ProjectsServiceToken = new InjectionToken<ProjectsService>('ProjectsService');

export interface ProjectsService {
  getOssProjects(): Observable<string>;
}
