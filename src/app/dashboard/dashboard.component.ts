import { Component, OnInit } from '@angular/core';
import { ApplicationsService } from '../applications.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {
  acceptedApplications: any;
  rejectedApplications: any;

  constructor(private service: ApplicationsService) {
    this.service.getAcceptedApplications().subscribe(response => {
      this.acceptedApplications = response;
    })
    
    this.service.getRejectedApplications().subscribe(response => {
      this.rejectedApplications = response;
    }) 
  }

  ngOnInit(): void {}

}
