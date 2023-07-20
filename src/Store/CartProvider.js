import React,{useState} from 'react';
import CartContext from './Cart-context';

const CartProvider = (props) => {
  const [items, setitems] = useState([])
    const additemhandler=(item)=>{
     //cartContext.items.push(item)
     setitems((prev)=>{
      return [...prev,item]
     })
    }
    const removeitemhandler=(id)=>{
      setitems((prev)=>{
        const removeitem=prev.filter(item=>item.id!==id)
        return removeitem;
      })

    }
    const cartContext={
        items:items,
        totalamount:0,
        additem:additemhandler,
        removeitem:removeitemhandler,
        message:"sahghj"
    };
  return (
    <CartContext.Provider value={cartContext }>
     {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider;