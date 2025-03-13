import { Component,OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductsService } from '../../product/products.service';
 
@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit {
  count:number=0;
  constructor(private proser:ProductsService){}
  ngOnInit(): void {
    this.proser.$ubject.subscribe((data:any)=>{
       this.count=data.length;
    })
  }
 
}