import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApplicationsService } from '../applications.service';

@Component({
  selector: 'app-applications-form',
  templateUrl: './applications-form.component.html',
  styleUrls: ['./applications-form.component.sass'],
})
export class ApplicationsFormComponent implements OnInit {
  applicationForm = new FormGroup({
    name: new FormControl(''),
    ownCar: new FormControl(''),
    validLicense: new FormControl(''),
    willingToDrive: new FormControl(''),
    dui: new FormControl(''),
  });

  handleSubmit($event: any) {
    $event.preventDefault();
    const formValues = this.applicationForm.value;

    const payload = {
      name: formValues.name,
      questions: [
        {Id: '1', Question: "Do you own a car?", Answer: formValues.ownCar === 'true' ? true : false},
        {Id: '2', Question: "Do you have a valid license?", Answer: formValues.validLicense === 'true' ? true : false},
        {Id: '3', Question: "Have you ever had a DUI?", Answer: formValues.dui === 'true' ? true : false},
        {Id: '4', Question: "Are you willing to drive over 1k miles a month?", Answer: formValues.willingToDrive === 'true' ? true : false}
      ]
    };
    this.service.postApplication(payload)
    this.router.navigate(['/'])
  }


  constructor(private service: ApplicationsService, private router: Router) {}

  ngOnInit(): void {}
}
