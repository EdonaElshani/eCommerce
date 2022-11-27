import { Container, CssBaseline } from "@mui/material";
import { useEffect, useState } from "react";
import Catalog from "../../fatures/catalog/catalog";
import Header from "../../fatures/catalog/Header";
import { Product } from "../models/product";

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  function addProduct()
  {
    setProducts(
      prevArray =>[...prevArray, 
        {
          id: prevArray.length + 1,
          name: "Product ",  
          price: 150.00,
          description: "A super good product",
          quantityInStock: 50,
        }
    ])
  }
  useEffect(()=>
  {
    fetch("http://localhost:1196/api/Product")
    .then(response => response.json())
    .then(data => setProducts(data));
  }, [])

  return (
    <div className="App">
      <CssBaseline/>
      <Header/>
      <Container>
       <Catalog products={products} addProduct={addProduct}/>
      </Container>
    </div>
  );
}

export default App;
