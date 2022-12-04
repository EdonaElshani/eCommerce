import { Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Product } from "../../app/models/product";

export default function ProductDetails() {
    const [product, setProduct]= useState<Product | null>(null)
    const[loading, setLoading]=useState(true);
    useEffect(()=>{
        axios.get(`http://localhost:1196/api/Product/${1}`)
        .then(response=>setProduct(response.data))
        .catch(error=>console.log(error))
        .finally(()=>setLoading(false))
    },[])
    if(loading) return <h3>Loading...</h3>
    if (!product) return <h3>Product not found...</h3>
    return (
        <>
            <Typography variant='h4'>
                {product?.name}
            </Typography>
        </>
    )
}
