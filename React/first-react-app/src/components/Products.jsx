import React from 'react'
import ProductList from './ProductList'
import {productData} from "../assets/ProductData"


const Products = () => {
  return (

    <div>
        <h1>Latest Products</h1>
        <div className='row'>
            {productData.products.map( prod => 
                <ProductList key={prod.id} proData={prod} />
             )}
        </div>
    </div>

    // <ProductList />
  )
}

export default Products