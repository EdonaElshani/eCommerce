import { useEffect, useState } from "react";
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
       <h1>Re-Store</h1>
       <ul>
          {products.map((item, index) => (
            <li key={index}>
              Emri i produktit: {item.name}, Cmimi: {item.price}, Pershkrimi: {item.description}
            </li>
          ))}
       </ul>
       <div>
        <button onClick={addProduct}>Add Product</button>
       </div>
    </div>
  );
}

export default App;
