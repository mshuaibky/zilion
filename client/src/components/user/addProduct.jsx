import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import toast, {Toaster} from 'react-hot-toast'
import { useFormik } from 'formik';
import { productDetails } from '../../helpers/user-helper'

function AddProduct() {
    const userId =localStorage.getItem('userId');
    console.log(userId,'kdkd');
    const navigate = useNavigate()
    const [price, setPrice] = useState('');
    const [discount, setDiscount] = useState('');
    const [offerPrice, setOfferPrice] = useState('');
    const [image, setImage] = useState('')
    const handlePriceChange = (event) => {
        setPrice(event.target.value);
    };

    const handleDiscountChange = (event) => {
        const discountValue = event.target.value;
        setDiscount(discountValue);

        if (discountValue >= 0) {
            const discountedPrice = Math.floor(price - (price * discountValue / 100));
            setOfferPrice(discountedPrice >= 0 ? discountedPrice.toString() : price);
        } else {
            setOfferPrice(price);
        }
    };
    const handleImage = (e) => {
        const file = e.target.files[0]

        TransformFile(file)
    };
    const TransformFile = (file) => {

        const reader = new FileReader()
        if (file) {
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                setImage(reader.result)
            }
        } else {
            setImage("")
        }
    }
    const formik = useFormik({
        initialValues: {
            name: '',
            discription: '',
            catagory:'',
            subCatagory:""
        },
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: async values => {
            let img = { image: image }
            let prices = { price: price }
            let Id={userId:userId}
            let offerPrices = { offerPrice: offerPrice }

            const imgCopy = Object.assign({}, prices, offerPrices, values, img,Id)
            console.log(imgCopy);
            let details = productDetails(imgCopy)
            toast.promise(details, {
                loading: 'Adding...',
                success: <b>successfully added</b>,
                error: <b>failed to add Product</b>
            })
            details.then((data) => {
                if (data) {
                  console.log(data,'namma data');
                    navigate('/')
                }
            })
        }
    })
    return (


        <div >



            <div class=" grid min-h-screen place-items-center bg-slate-100">
                <div class="mt-4 w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12">
                        <h1 className='text-lg text-center'>your product will display after approving by admins</h1>
                    <form onSubmit={formik.handleSubmit} class="mt-6">

                        <label htmlFor="name" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">
                            Name
                        </label>
                        <input
                            id="name"
                            type="text"
                            name="name"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.name}
                            placeholder="Name"
                            className="rounded-md block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                            required
                        />

                        <label htmlFor="name" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">
                            Catagory
                        </label>
                        <input
                            id="catagory"
                            type="text"
                            name="catagory"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.catagory}
                            placeholder="catagory"
                            className="rounded-md block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                            required
                        />
                          <label htmlFor="name" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">
                          subCatagory
                        </label>
                        <input
                            id="subCatagory"
                            type="text"
                            name="subCatagory"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.subCatagory}
                            placeholder="subCatagory"
                            className="rounded-md block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                            required
                        />


                        <label htmlFor="price" className="rounded-md block mt-2 text-xs font-semibold text-gray-600 uppercase">
                            Price
                        </label>
                        <input
                            id="price"
                            type="text"
                            name="price"

                            placeholder="Price"
                            value={price}
                            onChange={handlePriceChange}
                            className="rounded-md block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                            required
                        />
                        <label htmlFor="discount" className="rounded-md block mt-2 text-xs font-semibold text-gray-600 uppercase">
                            Discount
                        </label>
                        <input
                            id="discount"
                            type="text"
                            name="discount"
                            placeholder="Discount in percentage"
                            value={discount}
                            onChange={handleDiscountChange}
                            className="rounded-md block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                            required
                        />
                        <label for="password" class="rounded-md block mt-2 text-xs font-semibold text-gray-600 uppercase">discount price</label>
                        <input
                            value={offerPrice}
                            id="offerPrice"
                            type="text"
                            name="offerPrice" placeholder="offerPrice" class="rounded-md block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />

                        <label for="password" class="rounded-md block mt-2 text-xs font-semibold text-gray-600 uppercase">discription</label>
                        <input
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.discription}
                            id="discription"
                            type="text"
                            name="discription" placeholder="discription" class="rounded-md block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />

                        <label for="password" class="rounded-md block mt-2 text-xs font-semibold text-gray-600 uppercase"> Add Image</label>
                        <input
                            onChange={handleImage}
                            id="fileTwo" name="resImagesTwo" type="file"
                            className="mt-2 file-input file-input-bordered file-input-accent w-full max-w-xs" />
                        {
                            image ?
                                <img className='py-4' width="200px" height="200px" src={image ? image : ""}></img>
                                : ""
                        }





                        <button type="submit" class="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-teal-600 shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none">
                            Add
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddProduct
