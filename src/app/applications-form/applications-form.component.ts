import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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
    console.log(this.applicationForm.value);
  }

  // log(x: any){
  //   console.log(x)
  // }

  constructor() {}

  ngOnInit(): void {}
}
