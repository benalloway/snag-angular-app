import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationsFormComponent } from './applications-form.component';

describe('ApplicationsFormComponent', () => {
  let component: ApplicationsFormComponent;
  let fixture: ComponentFixture<ApplicationsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
