import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { EditproductComponent } from './components/editproduct/editproduct.component';
import { AddProductComponent } from './components/addproduct/addproduct.component';
 
export const routes: Routes = [
    {
        path:"",
        component:HomeComponent
    },{
        path:"nav",
        component:NavComponent
    },{
        path:"product",
        component:AddProductComponent
    },{
        path:"editpro/:id",
        component:EditproductComponent
    }
];