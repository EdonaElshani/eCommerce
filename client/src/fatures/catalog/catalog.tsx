import axios from "axios";
import { useState, useEffect } from "react";
import { Product } from "../../app/models/product";
import ProductList from "./ProductList";

export default function Catalog() {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
      axios.get("http://localhost:1196/api/Product")
      .then(response => setProducts(response.data))
      .catch(error=>console.log(error));
      console.log('rendered twice');
  }, [])
  {
    return (
      <>
        <ProductList products={products} />
      </>
    )
  }
}
