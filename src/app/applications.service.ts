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

export interface JobApplicationForm {
  name: string,
  email?: string | undefined, 
  job_listing_id?: string | undefined,
  questions: Array<{ Id: string, Question: string, Answer: boolean }>
}

@Injectable()
export class ApplicationsService {
  private API_URL;

  getQualifiedApplications() {
    return this.http.get(`${this.API_URL}/api/applications`, {headers: {
      'Content-Type':  'application/json',
    }, observe: 'body', responseType: 'json'})
  }

  postApplication(payload: JobApplicationForm) {
    this.http.post(`${this.API_URL}/api/applications`, JSON.stringify(payload), {headers:{'Content-Type': 'application/json'}})
      .subscribe(response => {
        console.log(response)
      })
  }

  constructor(private http: HttpClient) { 
    this.API_URL = environment.API_URL ?? ""
  }
}
