import axios from '../axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import Header from '../Header/Header'
import { Table } from 'react-bootstrap'
import { productsURL } from '../Constants/Constants'

function ProductsList() {
    const [products, setProducts] = useState([])
    useEffect(() => {
      axios.get('allProducts').then((response)=>{
          setProducts(response.data)
          console.log(response.data)
      })
    }, [])
    return (
        <div>
            <Header/>
            <h1>
                Products List
            </h1>
            <Table striped bordered hover>
  <thead>
    <tr>
      <th>Sno</th>
      <th>Name</th>
      <th>Price</th>
      <th>Description</th>
      <th>Image</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
      {
          products.map((e ,key)=>
          <tr>
          <td>{key+1}</td>
          <td>{e.name}</td>
          <td>{e.price}</td>
          <td>{e.description}</td>
          <td><img src= { `${productsURL+e.file_path}`} alt="" width="50px;" /></td>
          <td >
            <span>
            <button className="btn btn-warning mr-5">Edit</button>
            </span>
             <span>
          <button onClick={()=>{
            axios.delete('product/delete/'+`${e.id}`)
          }
           
        } className="btn btn-danger mr-5">Delete</button>
          </span>
         </td>
        </tr>
          )
      }

  </tbody>
</Table>
        </div>
    )
}

export default ProductsList
