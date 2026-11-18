import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useState } from 'react';
interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
}

export default function BuyPage({product}:{product: Product}){
    const [askCheckout, setAskCheckout] = useState(false)
    return (


        <AuthenticatedLayout>
            <Head title='BuyPage'/>
            <main className={`${askCheckout && 'blur-xl' } rounded-2xl text-white mt-5 w-[75dvw] max-h-[60dvh] min-h-[75dvh] gap-2 mx-auto flex p-5`}>
                <div className='border w-[50%] max-h-[50%] flex items-center p-3 text-sm overflow-scroll'>

                    {/* Image Wrapper */}
                    <div className='min-w-30 h-30 '>
                        <img src={product.image} className='w-full h-full' alt="" />
                    </div>

                    <div className='flex flex-col ml-4'>
                        <p className='pb-3 text-green-600 text-xl'>{product.price}$</p>
                        <p>{product.title}</p>
                        <p>{product.description}</p>
                    </div>

                </div>
                <div className=' w-[50%] max-h-[50%] flex justify-center px-3'>
                    <button onClick={()=>setAskCheckout(true)} className='self-start mt-3 bg-blue-300 w-full p-2 rounded-2xl'>Continue To Checkout</button>
                </div>


            </main>
             {askCheckout && <div className='text-white border absolute items-center justify-center inset-0 m-auto size-fit blur-none p-4  text-center'>
                    <p>Are you sure you want to checkout?</p>
                    <div className='flex self-center items-center justify-center gap-3'>
                        <button className='bg-green-500 p-1'>Continue</button>
                        <button onClick={()=>setAskCheckout(false)} className='bg-red-600 p-1'>Return</button>
                    </div>

                </div>}
        </AuthenticatedLayout>
    )
}
