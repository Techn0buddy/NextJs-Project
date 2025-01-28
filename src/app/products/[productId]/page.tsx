import type { Metadata } from "next";
type Props = {
    params: {
        productId: string
    };
};

export const generateMetadata = ({ params }: Props): Metadata => {
    return {
        title: `Product ${params?.productId}`
    }
}

export default function ProductDescription({
    params,
}: {
    params:{ productId: string };
}){
    return (<>
        <h1>This is product {params.productId}.</h1>
    </> )
}