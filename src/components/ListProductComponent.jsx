import { useEffect, useState } from "react"
import {listOfAllProducts} from '../services/ProductService'

const ListProductComponent = () => {
       
    const [products,setProducts]= useState([])

    useEffect(()=>{
        listOfAllProducts().then((response)=>{
            setProducts(response.data);

        }).catch(error=>{
            console.log(error);
        })
    },[])
    
    return(
        <div className='container'>
        <h2 className='text-center'>List of Products</h2>
            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>Product Id</th>
                        <th>Product name</th>
                        <th>Product description</th>
                        <th>Product image</th>
                        <th>Product price</th>
                        <th>Product quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product=>
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.name}</td>
                                <td>{product.description}</td>
                                <td>{product.image}</td>
                                <td>{product.price}</td>
                                <td>{product.quantity}</td>
                            </tr>
                            )
                    }
                </tbody>
            </table>
    </div>
    
  )
}
                          

export default ListProductComponent;
