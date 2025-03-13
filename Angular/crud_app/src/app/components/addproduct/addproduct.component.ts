import { Component } from '@angular/core';
import { ReactiveFormsModule , FormControl , FormGroup , Validators } from '@angular/forms';
import { ProductsService } from '../../product/products.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
 
@Component({
  selector: 'app-add-product',
  imports: [ReactiveFormsModule , CommonModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
 
  myForm:FormGroup=new FormGroup({
    name:new FormControl("" , [Validators.required]),
    price:new FormControl("" , [Validators.required]),
    quantity:new FormControl("" , [Validators.required]),
   
  })
  constructor(private proSer:ProductsService ,private router:Router){}
 
  get dd(){
    return this.myForm.controls
  }
 
postData(){
  let formData=this.myForm.value;
  this.proSer.addProduct(formData)
  .subscribe({
    next:(data:any)=>{
       alert("Product Added");
       this.router.navigateByUrl("/");//redirect to home
    },
    error:(err)=>{
      console.log(err)
    }
 } )
}
}