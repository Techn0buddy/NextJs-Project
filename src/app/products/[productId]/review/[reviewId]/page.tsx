"use client"
import { notFound } from "next/navigation";
export default function ReviewDetails({ params, }:
    {
        params: {
            productId: string;
            reviewId: string;
        }
    }
) {  
    if (parseInt(params?.reviewId) > 1000) {
        notFound();
    }
    const getRandom = (num:number) => {
        return Math.floor(Math.random() * num);
    }
    const random = getRandom(2);
    if(random === 1) {
        throw new Error("Error loading review");
    }
    return (
        <>
            <h1>This is review {params?.reviewId} of Product {params?.productId} </h1>
        </>
    )
}