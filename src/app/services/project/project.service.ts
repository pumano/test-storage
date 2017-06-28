import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { AuthenticationService, contentHeaders } from '../auth/index';
import { Project } from '../../models/project';

@Injectable()
export class ProjectService {

  apiPath = '/api/v1/projects';

  constructor(
    private http: Http,
    private authenticationService: AuthenticationService) {
  }

  public getProjects(): Observable<Project[]> {
    contentHeaders.set('x-access-token', this.authenticationService.token);
    const options = new RequestOptions({ headers: contentHeaders });

    return this.http.get(this.apiPath, options)
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }

  public getProject(id: string): Observable<Project> {
    contentHeaders.set('x-access-token', this.authenticationService.token);
    const options = new RequestOptions({ headers: contentHeaders });

    return this.http.get(this.apiPath + '/' + id, options)
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }

  public createProject(project: Project): Observable<Project> {
    const body = JSON.stringify(project);

    contentHeaders.set('x-access-token', this.authenticationService.token);
    const options = new RequestOptions({ headers: contentHeaders });

    return this.http.post(this.apiPath, body, options)
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }



  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().status + ' ' + error.json().message || 'Server error');
  }

}
