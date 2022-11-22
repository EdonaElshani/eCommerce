import { useState } from "react";

// const products = [
//   {name: "apple watch", price: 50.00},
//   {name: "mac pro", price: 1850.00},
//   {name: "iphone", price: 950.00},
// ]
function App() {
  const [products, setProducts] = useState([
    {name: "apple watch", price: 50.00},
    {name: "mac pro", price: 1850.00},
    {name: "iphone", price: 950.00},
  ]);

  function addProduct()
  {
    setProducts([...products, {name: "Product 1", price: 150.00}])
  }
  function addProduct2()
  {
    setProducts(prevArray => [...prevArray, {name: "Product " + (prevArray.length),  price: 150.00}])
  }
  return (
    <div className="App">
       <h1>Re-Store</h1>
       <ul>
          {products.map((item, index) => (
            <li key={index}>
              Emri i produktit: {item.name}, Cmimi: {item.price}
            </li>
          ))}
       </ul>
       <div>
        <button onClick={addProduct}>Add Product</button>
        <button onClick={addProduct2}>Add Another Product</button>
       </div>
    </div>
  );
}

export default App;
