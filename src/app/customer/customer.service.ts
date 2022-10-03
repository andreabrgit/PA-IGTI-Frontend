import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  urlApi: string = "https://pa-igti-webapi-clientes.azurewebsites.net"

  constructor(private httpClient: HttpClient) { }

  getCustomers(): Observable<any[]> {
    return this.httpClient
      .get<any[]>(`${this.urlApi}/Cliente`)
  }
}
