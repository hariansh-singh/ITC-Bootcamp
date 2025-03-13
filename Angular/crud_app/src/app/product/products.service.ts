import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';
 
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  $subject:any
  private api_url="http://localhost:3000/products"
  constructor(private http:HttpClient) { }
  getAllProduct():Observable<any>{
    return this.http.get(this.api_url)
  }
 
  addProduct(data:Product):Observable<any>{
    return this.http.post(this.api_url ,data)
  }
  deleteProduct(id:any){
    return this.http.delete(`${this.api_url}/${id}`);
 }
 getProductById(id:any):Observable<any>{
  return this.http.get(`${this.api_url}/${id}`);
}
editProduct(id:any,data:Product):Observable<any>{
  return this.http.put(`${this.api_url}/${id}`,data);
}
 
}