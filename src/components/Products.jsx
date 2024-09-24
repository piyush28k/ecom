import { Link } from 'react-router-dom'
import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Products = () => {
  const navigate = useNavigate()
    const products = useSelector(state => state.products)
    
  return (
    <>
    {/* <Link to="ProductDetail"> */}
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            
            <a key={product.id} href={product.href} className="rounded-md shadow-md group border-2">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  onClick={()=>{navigate(`ProductDetail/${product.id}`)}}
                  src={product.image}
                  // alt={product.text}
                  className=" h-full w-full object-cover object-center group-hover:opacity-75 cursor-pointer"
                />
              </div>
              <p className="mt-1 font-medium text-gray-900 px-2">{product.title}</p>
              <h3 className="text-sm text-gray-700 px-2">{product.subTitle}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900 p-2">${product.price}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
    {/* </Link> */}
    </>
     )
    
}

export default Products






