import { Grid } from "@mui/material";
import { Product } from "../../app/models/product";
import ProductCard from "./ProductCard";

export interface Props {
    products: Product[];
}
export default function ProductList({ products }: Props) {
    return (
        <>
            <Grid container spacing={3}>
                {products.map(product => (
                    <Grid item key={product.id} xs={3}>
                        <ProductCard product={product} />
                    </Grid>
                ))}
            </Grid>
        </>
    )
}