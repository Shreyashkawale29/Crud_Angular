import { Component, OnInit } from '@angular/core';
import { CustomerserviceService } from '../service/customerservice.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  addCustomerForm!: FormGroup;
  isFormActive = false;

  constructor(
    private service: CustomerserviceService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.addCustomerForm = this.fb.group({
      name: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      phone: [null, Validators.required]
    });
  }

  chatboxToggleHandler() {
    this.isFormActive = !this.isFormActive;
  }

  onSubmit() {
    if (this.addCustomerForm.valid) {
      this.service.addCustomer(this.addCustomerForm.value).subscribe(
        (res: any) => {
          console.log(res);
          this.router.navigateByUrl('/customers');
        },
        (err) => {
          console.error(err);
        }
      );
      console.log("Form Submitted!");
    } else {
      console.error("Form is invalid");
    }
  }
}
