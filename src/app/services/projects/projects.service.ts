import {Observable} from 'rxjs';
import {Project} from '../../models/project/project';
import {Injectable, InjectionToken} from '@angular/core';

export const ProjectsServiceToken = new InjectionToken<ProjectsService>('ProjectsService');

export interface ProjectsService {

  getOssProjects(): Observable<Project[]>;

  getReadme(path: string): Observable<string>;

  getOtherProjects(): Observable<Project[]>;

}

