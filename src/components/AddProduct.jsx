import { Navigate, useNavigate } from 'react-router-dom'
import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { add } from '../Store/Comslice'


const AddProduct = () => {

    const [title, setTitle] = useState("")
    const [subTitle, setSubTitle] = useState("")
    const [price, setprice] = useState("")
    const [discription, setDiscription] = useState("")
    const [image, setImage] = useState(null)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleImage = (e) => {
      const file = e.target.files[0];
      setImage(file);
    };

    const addTodoHandler = (e)=>{
        e.preventDefault();
        const imageToAdd = image ? URL.createObjectURL(image) : null ;
        dispatch(add({title:title,subTitle:subTitle, price:price, discription:discription, image:imageToAdd}))
        setTitle("")
        setSubTitle("")
        setprice("")
        setDiscription("")
        setImage(null)
        navigate("/products")
    }

  return (
    <>
    <div className="bg-white max-w-md mx-auto mt-10 p-6 rounded-md shadow-md border border-solid border-black">
      <h2 className="text-2xl font-semibold mb-6">Product Detail</h2>
      <form onSubmit={addTodoHandler}>

        <div className="mb-4">
          <label htmlFor="username" className="block text-black text-sm font-bold mb-2">
            title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="username" className="block text text-sm font-bold mb-2">
            subTitle
          </label>
          <input
            type="text"
            value={subTitle}
            onChange={(e) => setSubTitle(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-bold mb-2">
          Discription
          </label>
          <input
            type="text"
            value={discription}
            onChange={(e) => setDiscription(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-bold mb-2">
            Price
          </label>
          <input
            type="text"
            value={price}
            onChange={(e) => setprice(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <input type='file' accept="image/png, image/jpg, image/jpeg, image/gif" onChange={handleImage}/>

        <button
          type="submit"
          className="w-24 bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-300"
        >
          SELL
        </button>

      </form>
    </div>
  </>
  )
  
}

export default AddProduct