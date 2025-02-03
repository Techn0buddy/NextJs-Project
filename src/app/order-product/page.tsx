"use client"
import { useRouter } from "next/navigation"


export default function OrderProduct() {
    const router = useRouter();
    const handleClick = () => {
        console.log("Placing yout order");
        router.push('/');
    }
    return (
        <>
            <h2>Order Product</h2>
            <button onClick={handleClick}>Place Order</button>
        </>
    )
}