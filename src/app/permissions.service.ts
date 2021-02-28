import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PermissionsService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private permissionsUrl = 'api/permissions';

  constructor(private http: HttpClient) { }

  getPermissions(): Observable<any[]> {
    return this.http.get<any[]>(this.permissionsUrl);
  }
}
