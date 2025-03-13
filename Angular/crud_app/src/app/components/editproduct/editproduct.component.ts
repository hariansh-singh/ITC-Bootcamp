import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule , FormControl , FormGroup , Validators } from '@angular/forms';
import { ActivatedRoute , Router } from '@angular/router';
import { ProductsService } from '../../product/products.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-editproduct',
  imports: [ReactiveFormsModule , CommonModule],
  templateUrl: './editproduct.component.html',
  styleUrl: './editproduct.component.css'
})
export class EditproductComponent implements OnInit{
  id:any
myForm:FormGroup=new FormGroup({
    name:new FormControl("" , [Validators.required]),
    price:new FormControl("" , [Validators.required]),
    quantity:new FormControl("" , [Validators.required]),
   
  })
  constructor(private aroute:ActivatedRoute , private proser:ProductsService , private router:Router ){}
  get dd(){
    return this.myForm.controls
  }
  ngOnInit(): void {
    this.id=this.aroute.snapshot.paramMap.get('id');
    this.proser.getProductById(this.id).subscribe({
      next:(data:any)=>{
        this.myForm.patchValue(data);
      },
      error:(err)=>{
        console.log(err)
      }
 
    })
  }
 
  postData(){
    let formData=this.myForm.value;
    console.log(formData)
    this.proser.editProduct(this.id , formData)
    .subscribe({
      next:(data:any)=>{
        Swal.fire("Product Updated !");
        this.router.navigateByUrl("/")
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }
}
 