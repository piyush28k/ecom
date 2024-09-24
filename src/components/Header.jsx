import React from 'react'
import { RiShoppingCart2Line } from '@remixicon/react';
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 right-0 z-1 bg-black p-4">
      <nav className="flex items-center justify-between">
        <div className="text-white font-bold text-lg">
          store_X
        </div>
        <div className="flex space-x-4">
          <NavLink to="/"
            className={({isActive}) =>
                    `block py-2 pr-4 pl-3 ${isActive ? "text-orange-700":"text-white"} duration-200 border-b border-gray-100 hover:bg-gray-50            lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                }
                >
                Home
            </NavLink>
          <NavLink to="products"
            className={({isActive})=>
                    `block py-2 pr-4 pl-3 ${isActive ? "text-orange-700":"text-white"} duration-200 border-b border-gray-100 hover:bg-gray-50            lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                }
                >
                products
            </NavLink>
            <NavLink
            to="uploadProduct"
            className={({isActive})=>
                    `block py-2 pr-4 pl-3 ${isActive ? "text-orange-700":"text-white"} duration-200 border-b border-gray-100 hover:bg-gray-50            lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                }
                >
              sell
            </NavLink>
            
            <NavLink
            to="cart"
            className={({isActive})=>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50            lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                }
                >
                   <RiShoppingCart2Line
                    size={22} // set custom `width` and `height`
                    color="white" // set `fill` color
                    /> 
            </NavLink>
            

        </div>
      </nav>
    </header>
  )
}

export default Header

                         