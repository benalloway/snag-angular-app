import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-applications-list',
  templateUrl: './applications-list.component.html',
  styleUrls: ['./applications-list.component.sass']
})
export class ApplicationsListComponent implements OnInit {
  applications = [{name: 'Benjamin', job_listing_id: {title: "Delivery Driver"}}, {name: 'Daniel', job_listing_id: {title: "Delivery Driver"}}]

  constructor() { }

  ngOnInit(): void {
  }

}
