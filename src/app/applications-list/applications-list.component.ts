import { Component, OnInit } from '@angular/core';
import { ApplicationsService } from '../applications.service';

@Component({
  selector: 'app-applications-list',
  templateUrl: './applications-list.component.html',
  styleUrls: ['./applications-list.component.sass']
})
export class ApplicationsListComponent implements OnInit {
  applications;
  
  constructor(service: ApplicationsService) {
    this.applications = service.getQualifiedApplications()
   }

  ngOnInit(): void {
  }

}
