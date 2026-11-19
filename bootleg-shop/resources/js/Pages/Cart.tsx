import { usePage } from "@inertiajs/react";
import {Head} from "@inertiajs/react";

interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
}

interface productProps {
    products: Product[];
}

export default function({products}:productProps){
    const user = usePage().props.auth.user;

    return (
        <>
            <Head title="Cart"/>
            {products.map((product, index)=>{
                <p>{product.title}</p>
            })}
        </>
    )
}
