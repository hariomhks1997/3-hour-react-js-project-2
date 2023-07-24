import React,{useState} from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./Store/CartProvider";


function App() {
  const [cartisshown, setcartisshown] = useState(false);
  const showcarthandler=()=>{
   setcartisshown(true)
  }
  const hidecarthandler=()=>{
  setcartisshown(false)
  }
  return (

    <CartProvider>
      {cartisshown && <Cart hide={hidecarthandler}></Cart>}
      <Header shown={showcarthandler} ></Header>
      <main>
        <Meals></Meals>
      </main>
    </CartProvider>
  );
}

export default App;
