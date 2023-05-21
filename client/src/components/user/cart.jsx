import React,{useEffect,useState} from 'react'
import { Trash, Heart } from 'lucide-react'
import {getCartItem} from '../../helpers/user-helper'
import { Link } from 'react-router-dom';

function Cart() {
    const userId = localStorage.getItem('userId');
    const [cart,setCart]=useState([])

    useEffect(()=>{
       getCartItem(userId).then((data)=>{
        if(data){
            console.log(data,'namma data');
            setCart(data?.data?.data)
        }
       })
    },[])
   
  return (
    <div className="mx-auto flex max-w-3xl flex-col space-y-4 p-6 px-2 sm:p-10 sm:px-2">
      <h2 className="text-3xl font-bold">Your cart</h2>
      <p className="mt-3 text-sm font-medium text-gray-700">
       Lets shop!
      </p>
      <ul className="flex flex-col divide-y divide-gray-200">
        {cart.map((product,i) => (
          <li key={i} className="flex flex-col py-6 sm:flex-row sm:justify-between">
            <div className="flex w-full space-x-2 sm:space-x-4">
                {
                    product.image.map((image)=>{
                                return(
                        <img
                          className="h-20 w-20 flex-shrink-0 rounded object-contain outline-none dark:border-transparent sm:h-32 sm:w-32"
                          src={image.secure_url}
                          
                        />)
                    })
                }
              <div className="flex w-full flex-col justify-between pb-4">
                <div className="flex w-full justify-between space-x-2 pb-2">
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold leading-snug sm:pr-8">{product.name}</h3>
                    <p className="text-sm">{product.catagory}</p>
                    <p className="text-sm">{product.subCatagory}</p>
                    <p className="text-sm">{product.discription}</p>


                  </div>
                  <div className="text-right">
                    <p className="line-through text-lg font-bold">MRP:{product.price}</p>
                    <p className=" text-orange-600 text-lg font-bold">Offer Price:{product.offerPrice}</p>
                  </div>
                </div>
                <div className="flex divide-x text-sm">
                
                
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
     
      <div className="flex justify-end space-x-4">
        <Link to={'/'}
          type="button"
          className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Back to shop
        </Link>
       
      </div>
    </div>
  )
}

export default Cart
