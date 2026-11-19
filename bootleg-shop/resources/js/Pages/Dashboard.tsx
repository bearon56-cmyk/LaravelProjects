import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
}

interface DashboardProps {
    products: Product[];
}

export default function Dashboard({products} : DashboardProps) {
    {console.log(products)}
    return (
        <AuthenticatedLayout
            header={
                <>
                    <h2 className="text-xl font-bold leading-tight text-gray-800">
                        <span className='mr-1 underline font-extrabold'>THE</span>
                        Shop
                    </h2>
                    <p>None to compare</p>
                </>

            }
        >
            <Head title="Dashboard" />
            <div className='mt-3 '>
                <div className='bg-amber-200 size-50 z-0 absolute rounded-full left-1'></div>
                <div className='bg-black size-40 z-0 absolute rounded-full left-0'></div>
                <div className='bg-amber-200 size-50 z-0 absolute rounded-full right-1'></div>
            </div>

            <div className="py-10">
                <div className="mx-auto max-w-3xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <p className="p-6 text-gray-900 font-extrabold text-center">
                            Keep Stay!
                        </p>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-3 gap-4 mx-2 z-1 relative mt-10'>
                {products.map((product)=>(
                    <div className='bg-linear-to-tl hover:bg-mist-200 bg-gray-300  transition-all ease-out hover duration-300 flex items-center border shadow-lg flex-col p-2'>
                        <p className='text-xs self-start'>{product.category}</p>
                        <img className='size-50' loading='lazy' src={product.image} alt="" />
                        <p className='font-extrabold text-gray-600 text-xs'>{product.description}</p>
                        <p className=' self-start ml-3 my-2 bg-black text-white p-1'>{product.price}$</p>
                        <div className='font-extrabold' key={product.id}>{product.title}</div>

                        <div  className='self-end mr-3 flex gap-2'>
                            <Link className='p-1 text-white bg-green-500'>Add to wishlist</Link>
                            <Link className='p-1 text-white bg-green-500' href={`/buyPage/${product.id}`}>Buy</Link>
                        </div>

                    </div>

                ))}
            </div>
        </AuthenticatedLayout>
    );
}
