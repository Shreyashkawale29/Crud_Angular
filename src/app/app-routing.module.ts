import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { GetAllCustomersComponent } from './get-all-customers/get-all-customers.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';

const routes: Routes = [
  {
    path: 'add', component: AddCustomerComponent
  },
  {
    path: 'customers', component: GetAllCustomersComponent
  },
  {
    path: 'get/:id', component: UpdateCustomerComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
