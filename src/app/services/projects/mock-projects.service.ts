import {ProjectsService} from './projects.service';
import {Observable, of} from 'rxjs';
import {Project} from '../../models/project/project';

export class MockProjectsService implements ProjectsService {
  getOssProjects(): Observable<Project[]> {
    return of();
  }

  getOtherProjects(): Observable<Project[]> {
    return of();
  }

  getReadme(path: string): Observable<string> {
    return of();
  }

}
