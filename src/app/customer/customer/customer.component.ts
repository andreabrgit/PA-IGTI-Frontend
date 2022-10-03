import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  clientes?: any[]

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.customerService.getCustomers().subscribe(clientes => {
      this.clientes = clientes
    })
  }

}
