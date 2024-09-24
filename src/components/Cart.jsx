import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeCart } from "../Store/Comslice";
import { useNavigate } from "react-router-dom";
<link rel="stylesheet" href="Cart.css" />;

const Cart = () => {
  const cartProducts = useSelector((state) => state.cartProducts);
  console.log(cartProducts)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const sum=()=>{
    return cartProducts.reduce((total, item) => parseInt(total) + parseInt(item.price)*parseInt(item.quantity), "0")
    // return cart.reduce((total, item) => total + item.quantity * item.price, "0")
  }
  if (cartProducts.length==0) {
    return <div className="p-20 font-bold text-xl flex justify-center">Cart is empty, add some product!</div>;
  }
  return (
    <>
      <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
        <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
          <div className="flex items-start justify-between">
            <div className="text-lg font-medium text-gray-900">
              Shopping cart
            </div>
            <div className="ml-3 flex h-7 items-center">
              <button
                type="button"
                className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
              >
                <span className="absolute -inset-0.5" />
              </button>
            </div>
          </div>

          <div className="mt-8">
            <div className="flow-root">
              <ul role="list" className="-my-6 divide-y divide-gray-200">
                {cartProducts.map((dp) => (
                  <li key={dp.id} className="flex py-6">
                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                      <img
                        src={dp.image}
                        // alt={product.imageAlt}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>

                    <div className="ml-4 flex flex-1 flex-col">
                      <div>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <h3>
                            <a>{dp.title}</a>
                          </h3>
                          <p className="ml-4">${dp.price*dp.quantity}</p>
                        </div>
                        <p className="mt-1 text-sm text-gray-500">price: ${dp.price}</p>
                      </div>
                      <div className="flex flex-1 items-end justify-between text-sm">
                        <p className="text-gray-500">Qty: {dp.quantity}</p>

                        <div className="flex">
                          <button
                            // onClick={() => dispatch(removeTodo(todo.id))}
                            onClick={() => {dispatch(removeCart(dp.id))
                            console.log(dp.id)
                            }}
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                          >
                            Remove
                          </button>
                          
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
          <div className="flex justify-between text-base font-medium text-gray-900">
            <p>Subtotal</p>
            <p>${sum()}</p>
          </div>
          <p className="mt-0.5 text-sm text-gray-500">
            Shipping and taxes calculated at checkout.
          </p>
          <div className="mt-6">
            <a
              href="#"
              className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
            >
              Place Order
            </a>
          </div>
          <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
            <p>
              <button
                onClick={()=> navigate("/products")}
                type="button"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Continue Shopping
                <span aria-hidden="true"> &rarr;</span>
              </button>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
