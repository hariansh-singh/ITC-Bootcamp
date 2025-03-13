import { Component , OnInit } from '@angular/core';
import { Product } from '../../product/product';
import { ProductsService } from '../../product/products.service';
import Swal from 'sweetalert2'
import { RouterLink } from '@angular/router';
 
 
 
@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
productData:Product[]=[];
 
constructor(private proser:ProductsService ){}
// addCart(id:any){
//   if(localStorage.getItem("mycart")!=undefined){
//      let data:any=localStorage.getItem("mycart");
//      let arr=JSON.parse(data);
//      if(arr.includes(id)){
//         Swal.fire("Already in a cart!");
//      }
//      else{
//        arr.push(id);
//        localStorage.setItem("mycart",JSON.stringify(arr));
//        Swal.fire("Add Cart Successfully!");
//      }
//   }
//   else{
//      let arr=[];
//      arr.push(id);
//      localStorage.setItem("mycart",JSON.stringify(arr));
//      Swal.fire("Add Cart Successfully!");
//   }
// }
addCart(id:any){
  if(localStorage.getItem("mycart")!=undefined){
    let data:any=localStorage.getItem("mycart");
    let arr=JSON.parse(data);
    if(arr.includes(id)){
      Swal.fire("Already In Cart")
    }else{
      localStorage.setItem("myCart",id)
    }
 
  }else{
    let arr:any[]=[];
    arr.push(id)
    localStorage.setItem("mycart" , JSON.stringify(arr));
    Swal.fire("Add Cart Successfully");
 
  }
}
ngOnInit():void{
  this.proser.getAllProduct().subscribe({
    next:(data:any)=>{
      console.log(data);
      this.productData=data;
    },
    error:(err)=>{
      console.log(err)
    }
  })
}
delPro(id:any){
  // if(confirm("Do u want to delete?")){
    //  this.proser.deleteProduct(id)
    //  .subscribe({
    //     next:(data:any)=>{
    //       this.productData=this.productData.filter((pro:any)=> pro.id!=id);
    //   //  this.router.navigateByUrl("/");//redirect to home
 
 
    //        alert("Product Deleted!");
    //     },
    //     error:(err)=>{
    //       console.log(err)
    //     }
    //  })
  // }
 
  Swal.fire({
    title: "Do you want to delete the product?",
    showDenyButton: true,
    // showCancelButton: true,
    confirmButtonText: "Delete",
    denyButtonText: `Cancel`
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      this.proser.deleteProduct(id)
      .subscribe({
         next:(data:any)=>{
           this.productData=this.productData.filter((pro:any)=> pro.id!=id);
       //  this.router.navigateByUrl("/");//redirect to home
       Swal.fire("Product is deleted");
 
            // alert("Product Deleted!");
         },
         error:(err)=>{
           console.log(err)
         }
      })
     
    } else if (result.isDenied) {
      Swal.fire("Product is not deleted", "", "info");
    }
  });
 
 }
}
 