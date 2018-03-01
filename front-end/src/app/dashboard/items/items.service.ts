import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class ItemsService {

  constructor(private httpClient: HttpClient) { }

  createProduct(name:string, price:number) {
    return this.httpClient.post(environment.apiUrl + 'product/createProduct', {'name':name, 'price':price});
  }

  // getProducts(){
  //   return this.httpClient.get(environment.apiUrl + 'product/getProducts');
  // }

}
