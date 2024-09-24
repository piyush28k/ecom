import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import {addCart} from '../Store/Comslice'

const ProductDetail = () => {
  const {id} = useParams();
  const products = useSelector(state=>state.products)
  const dp = products.find((product)=> product.id==id);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [quantity, setQuantity] = useState("1")

  const handleCart =(e)=>{
    e.preventDefault();
    navigate("/Cart")
    dispatch(addCart({id:dp.id,title:dp.title,subTitle:dp.subTitle,quantity:quantity, price:dp.price, image:dp.image}))

  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className=" md:col-span-2 lg:col-span-2">
          <img src={dp.image} className="w-1/2 m-4 object-cover" />
        </div>

        <div className="col-span-1 md:col-span-1 lg:col-span-1">
          <h1 className="text-3xl font-semibold mt-6">{dp.title}</h1>
          <p className="text-gray-600 mb-4">{dp.subTitle}</p>
          <p className="text-gray-600 mb-4">{dp.discription}</p>
          <div>
            <label htmlFor="" className="flex-row mr-2 text-black text-sm mb-2">QTY: </label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="w-12 h-6 border border-solid border-black pl-2 rounded"
          />
          </div>
          <p className="text-lg font-bold text-gray-800 mb-4">${dp.price}</p>
          <button
            onClick={handleCart}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
          >
            Add to Cart
          </button>
        </div>
      </div>
  </>
  )
}

export default ProductDetail