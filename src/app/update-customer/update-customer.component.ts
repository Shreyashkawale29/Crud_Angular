import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerserviceService } from '../service/customerservice.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {

  getCustomerForm!: FormGroup;
  isFormActive = true;

  id:number =this.activatedRoute.snapshot.params['id'];
  constructor(private activatedRoute: ActivatedRoute, private service: CustomerserviceService, private fb: FormBuilder, private router :Router){}

  ngOnInit(){

    this.getCustomerForm = this.fb.group({
      name: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      phone: [null, Validators.required],
    })

    // this.updateCustomerForm = this.fb.group({
    //   name: [null, Validators.required],
    //   email: [null, [Validators.required, Validators.email]],
    //   phone: [null, Validators.required],
    // })

      this.getCustomer();
  }

  getCustomer(){
    this.service.getCustomer(this.id).subscribe((res:any)=>{
      this.getCustomerForm.patchValue(res);

    })
  }

  chatboxToggleHandler() {
    this.isFormActive = !this.isFormActive;
  }

  updateCustomer(){
    this.service.updateCustomer(this.id,this.getCustomerForm.value).subscribe((res:any)=>{
      
      this.router.navigateByUrl("customers");

    })
  }

}
