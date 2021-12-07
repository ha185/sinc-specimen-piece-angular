import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppBase } from 'src/core/models/app.base';
import { AppDetails } from 'src/core/models/app.details';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UpdateService {
  constructor(private httpClient: HttpClient) {}

  public getVersions(): Observable<AppBase[]> {
    return this.httpClient.get<AppBase[]>(
      `${environment.baseUrl}/api/update/list`
    );
  }

  public getDetails(version: string): Observable<AppDetails> {
    return this.httpClient.get<AppDetails>(
      `${environment.baseUrl}/api/update/${version}/details`
    );
  }
}
