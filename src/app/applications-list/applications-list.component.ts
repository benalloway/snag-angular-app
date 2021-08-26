import { Component, OnInit } from '@angular/core';
import { ApplicationsService, Application } from '../applications.service';

@Component({
  selector: 'app-applications-list',
  templateUrl: './applications-list.component.html',
  styleUrls: ['./applications-list.component.sass']
})
export class ApplicationsListComponent implements OnInit {
  applications: any;
  
  constructor(private service: ApplicationsService) {
    this.service.getQualifiedApplications().subscribe(response => {
      this.applications = response;
    })
    
  }

  ngOnInit(): void {
  }

}
