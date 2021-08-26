import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

export interface Application {
  id: string,
  name: string,
  qualified: boolean,
  questions: object,
  email: string,
  job_listing_id: {title: string}
}

@Injectable()
export class ApplicationsService {
  API_URL;

  getQualifiedApplications() {
    return this.http.get(`${this.API_URL}/api/applications`, {headers: {
      'Content-Type':  'application/json',
    }, observe: 'body', responseType: 'json'})
  }

  constructor(private http: HttpClient) { 
    this.API_URL = environment.API_URL ?? ""
  }
}
