import { Button } from "@mui/material";
import { Product } from "../../app/models/product";
import ProductList from "./ProductList";

export interface Props{
    addProduct: () => void;
    products: Product[];
}

export default function Catalog({addProduct, products}: Props)
{
return(
    <>   
    <ProductList products={products}/>
       <div>
        <Button variant='contained' onClick={addProduct}>Add Product</Button>
       </div>
    </>
)
}

