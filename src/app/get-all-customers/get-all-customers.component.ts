import { Component, NgModule, OnInit } from '@angular/core';
import { CustomerserviceService } from '../service/customerservice.service';


@Component({
  selector: 'app-get-all-customers',
  templateUrl: './get-all-customers.component.html',
  styleUrls: ['./get-all-customers.component.css']
})
export class GetAllCustomersComponent implements OnInit {
[x: string]: any;

  constructor( private service : CustomerserviceService){}

  // customerObj: any = {
  //   name: '',
  //   email: '',
  //   phone: '',
  // };



  customersList: any[] = [];
  ngOnInit(): void {
    this.getAllCustomers();
  }

  getAllCustomers(){
    this.service.getAllCustomers().subscribe((res) =>{
      console.log(res);
      this.customersList = res;
    })
  }

  deleteCustomer(id:number){
    this.service.deleteCustomer(id).subscribe((res) =>{
    console.log(res);
    this.getAllCustomers();
  })
}

}
