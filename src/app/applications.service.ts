import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApplicationsService {
  getQualifiedApplications() {
    const applications = [{name: 'Benjamin', job_listing_id: {title: "Delivery Driver"}}, {name: 'Daniel', job_listing_id: {title: "Delivery Driver"}}];
    return applications;
  }
  constructor() { }
}
