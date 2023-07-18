import React,{Fragment,useState} from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  const [cartisshown, setcartisshown] = useState(false);
  const showcarthandler=()=>{
   setcartisshown(true)
  }
  const hidecarthandler=()=>{
  setcartisshown(false)
  }
  return (
    <Fragment>
      {cartisshown && <Cart hide={hidecarthandler}></Cart>}
      <Header shown={showcarthandler} ></Header>
      <main>
        <Meals></Meals>
      </main>
    </Fragment>
  );
}

export default App;
