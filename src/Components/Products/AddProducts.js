import axios from '../axios'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Header from '../Header/Header'

function AddProducts() {
    const history = useHistory()
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.warn(name , image ,price ,description)
        const formData= new FormData();
        formData.append('image',image);
        formData.append('name',name);
        formData.append('price',price);
        formData.append('description',description);
        axios.post('/addProduct',formData).then((response)=>{
            console.log(response)
            alert('data added succesfuly')
        }).catch(err =>{
            console.log(err)
        })
    }
    return (
        <div>
            <Header/>
            <form  onSubmit={handleSubmit} action="">
                    <label htmlFor="">Name</label>
                    <input value={name} onChange={(e) => { setName(e.target.value) }} required className="form-control" name="name" type="text" />
                    <br />
                    <label htmlFor="">Price</label>
                    <input value={price} onChange={(e) => { setPrice(e.target.value) }} required className="form-control" name="price" type="text" />
                    <br />
                    <label htmlFor="">Description</label>
                    <input value={description} onChange={(e) => { setDescription(e.target.value) }} required className="form-control" name="description" type="text" />
                    <br />
                    <label htmlFor="">Image</label>
                    <input  onChange={(e) => { setImage(e.target.files[0]) }} required className="form-control" name="image" type="file" />
                    <br />
                    <button className="btn btn-primary" type="submit">Submit</button>
                </form>
        </div>
    )
}

export default AddProducts
