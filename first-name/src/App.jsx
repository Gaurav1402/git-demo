
import './App.css'

import Product from './components/Product';
import Welcome from './components/Welcome';
import Cart from './components/Cart';
import ProductList from './components/ProductList';

function App() {
const cat=["Electronics","Cloths","Shoes","Foods"];
const pd={name:"Watch",price:300,isAvalaibe:false}
  return (
    <>
      {/* <h1> My first App</h1>
      <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ad voluptates cum pariatur! Optio laboriosam velit architecto, labore eius dolor corrupti exercitationem esse reprehenderit voluptate deserunt in! Modi, eveniet delectus!</p>
    <h2>App Component</h2>
    <button type="button" className="btn btn-primary">Primary</button>
{/* <Welcome name="John" city="Ny"/>
<Welcome name="David" city="LosAngles"/> */}
{/* <Product catArr={cat}/> */}
{/* <Cart prd={pd}/> */}
<ProductList/>
    </>
  )
}

export default App
