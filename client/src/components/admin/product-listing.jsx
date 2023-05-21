import React, { useState, useEffect } from 'react'
import Swal from 'sweetalert2'
import { getProduct,varifyProduct ,getAdminData} from '../../helpers/admin-helper'

function ProductListing() {
    const  adminId = localStorage.getItem('adminId');
    const [admin,setAdmin]=useState('')

    const [product, setProduct] = useState([])
    useEffect(()=>{
        getAdminData(adminId).then((data)=>{
           
            setAdmin(data?.data?.data)
        })
    },[])
    useEffect(() => {
        getProduct().then((data) => {
            setProduct(data?.data?.data)
        })
    }, [])
   
    const handleVarify=(id)=>{
        
        console.log(id,'idsss');
    varifyProduct(id).then((data)=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes!'
          }).then((result) => {
            if (result.isConfirmed) {
                if(data){
                    setProduct(data.data.data)
                  }
              Swal.fire(
                'verify!',
                'product is verify.',
                'success'
              )
            }
          })
      
    })
    }
    return (
        <div class="mt-5">

{
    admin.isLoggedIn?

            <table class=" max-w-5xl mx-auto table-auto">
                <thead class="justify-between">
                    <tr class="bg-teal-600">
                        <th class="px-16 py-2">
                            <span class="text-gray-100 font-semibold">Image</span>
                        </th>
                        <th class="px-16 py-2">
                            <span class="text-gray-100 font-semibold">Name</span>
                        </th>

                        <th class="px-16 py-2">
                            <span class="text-gray-100 font-semibold">Price</span>
                        </th>

                        <th class="px-16 py-2">
                            <span class="text-gray-100 font-semibold">offerPrice</span>
                        </th>
                        <th class="px-16 py-2">
                            <span class="text-gray-100 font-semibold">catagory</span>
                        </th>
                        <th class="px-16 py-2">
                            <span class="text-gray-100 font-semibold">subCatagory</span>
                        </th>
                        <th class="px-16 py-2">
                            <span class="text-gray-100 font-semibold">settings</span>
                        </th>

                    </tr>
                </thead>
                {
                    product.map((items) => {
                        return (

                            <tbody class="bg-gray-200">
                                <tr class="bg-white border-b-2 border-gray-200">
                                    <td class="px-16 py-2 flex flex-row items-center">
                                        {
                                            items.image.map((image) => {
                                                return (
                                                    <img
                                                        class="h-8 w-8 rounded-md object-cover "
                                                        src={image.secure_url}
                                                        alt=""
                                                    />)
                                            })
                                        }
                                    </td>
                                    <td>
                                        <span class="text-center ml-2 font-semibold">{items.name} </span>
                                    </td>

                                    <td class="px-16 py-2">
                                        <span>{items.price}</span>
                                    </td>
                                    <td class="px-16 py-2">
                                        <span>{items.offerPrice}</span>
                                    </td>


                                    <td class="px-16 py-2">
                                        <span>{items.catagory}</span>
                                    </td>
                                    <td class="px-16 py-2">
                                        <span>{items.subCatagory}</span>
                                    </td>
                                    <td className='px-14'>
                                        {
                                            
                                            items.varify?
                                        <button
                                        
                                            type="button"
                                            className="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                        >
                                           verified
                                        </button>:
                                          <button
                                          onClick={()=>{handleVarify(items._id)}}
                                              type="button"
                                              className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                          >
                                             verify
                                          </button>
                                        }
                                    </td>
                                </tr>

                            </tbody>)
                    })
                }
            </table>:
             <div>
             <h1 className='mt-6 text-red-600 text-center'>please login your session expired</h1>
         </div>
}
        </div>
    )
}

export default ProductListing
