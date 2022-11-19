import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer/customer.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '', 
    component: HomeComponent
  },  
  { 
    path: 'Customer', 
    component: CustomerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
