import React,{useEffect,useState} from 'react'
import {getAllProducts,saveCart} from '../../helpers/user-helper'
import toast, {Toaster} from 'react-hot-toast'

function Product() {
  const [product,setProduct]=useState([])
  useEffect(()=>{
     getAllProducts().then((data)=>{
      if(data){
        setProduct(data.data.data)
      }
     })
  },[])

  const handleAddtocart=(id)=>{
   saveCart(id).then((data)=>{
    if(data){
      toast.success('added to cart')
    }
   }).catch((error)=>{
   if(error){
    toast.error('item already in cart')
   }
   })
  }
  return (
    <div>
      <Toaster position='top-center' reverseOrder={false}></Toaster>

    <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
 
{
  product.map((item,i)=>{
return(
    <div key={i} className="rounded-md border">
      {
        item.image.map((image)=>{
      return(
      <img
        src={image.secure_url}
        alt="Laptop"
        className="object-cover aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[200px]"
      />)
          
    })
  }
      <div className="p-4">
        <h1 className="inline-flex items-center text-lg font-semibold">{item.name}</h1>
        <p className="mt-3 text-sm text-gray-600">
        {item.catagory}
        </p>
        <p className="mt-3 text-sm text-gray-600">
         {item.subCatagory}
        </p>
        <p className="mt-3 text-sm text-gray-600">
         {item.discription}
        </p>
        <div className="mt-3 flex items-center space-x-2">
          <span className="block line-through font-bold">MRP: {item.price}  </span>
         
        </div>
        <div className="mt-5 flex items-center space-x-2">
          <span className="block text-sm font-semibold">Offer Price : </span>
           <span className="block text-lg text-green-600 font-semibold">RS: {item.offerPrice}  </span>
        </div>
        <button
          onClick={()=>{handleAddtocart(item._id)}}
          type="button"
          className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Add to Cart
        </button>
      </div>
    </div>)

})
}
</div>
</div>
  )
}

export default Product
