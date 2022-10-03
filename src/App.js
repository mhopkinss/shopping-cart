import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import React, { useState } from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Shop from './Shop';
import Cart from './Cart';
import data from './data';
import Footer from './Footer';
import './index.css'

function App() {
  const [itemsCart, setItemsCart] = useState([])

  //add to cart function //
  function addToCart(e){
   let itemToAdd = data.find(item => item.id === e.target.dataset.id)

   let checkIfExists = {}

   if(itemsCart.length === 0){
    return setItemsCart([itemToAdd])
  } else {
    checkIfExists = itemsCart.find(item => {
      return item.id === itemToAdd.id
    })

   if(checkIfExists){
      setItemsCart(prevData => {
        let datas = prevData.map(item => {
          if(item.id === checkIfExists.id){
            return {...item, quantity: item.quantity + 1}
          } else {
            return item
          }
        })
        return datas
      })
    } else {
      return setItemsCart(prevData => [...prevData, itemToAdd])
    }
  }
}

  console.log(itemsCart)

//remove from cart function
  function removeFromCart(e){
    let itemToDelete = itemsCart.find(item => {
      return item.id === e.target.dataset.id
    })

    setItemsCart(prevData => {
      let arr = prevData.filter(item => {
        return item.id !== itemToDelete.id
      })
      return arr
    })
  }

  return (
    <div className="App">
     <BrowserRouter>
     <Navbar items={itemsCart}/>
      <Routes>
        <Route path="/shopping-cart" element={<Navigate to="/shopping-cart/home" />} />
        <Route path='/shopping-cart/home' element={<Home />}/>
        <Route path='/shopping-cart/shop' element={<Shop add={addToCart} data={data}/>}/>
        <Route path='/shopping-cart/cart' element={<Cart add={addToCart} minus={removeFromCart} items={itemsCart}/>} />
      </Routes>
      <Footer />
     </BrowserRouter>
    </div>
  );
}

export default App;
