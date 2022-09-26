import React from 'react';
import {Link} from 'react-router-dom';

function Cart({add, minus, items}) {
    let style = {
        width: '150px',
        height: '150px'
    }
    let total = 0

    let getTotal = items.forEach(item => {
        total += Number(item.price) * item.quantity
    })
    
    let inCartItems = items.map(item => {
        return <div className='cart-card-container'>
            <div className='cart-card-info'>
                <img src={item.url[0]} style={style}></img>
                <h2>{item.cameraName}</h2>
            </div>
            <div className='cart-card-buttons'>
                <span>Subtotal: {item.price}</span>
                <span>Quantity: ({item.quantity})</span>
                <button onClick={add} data-id={item.id}>Add</button>
                <button onClick={minus} data-id={item.id}>REMOVE</button>
            </div>
        </div>

    })
    return (
        <div className='cart-main'>
            <div className='cart-container'>
                <div className='yourshoppingcart'>
                    <h1>Your Shopping Cart</h1>
                </div>
                {inCartItems}
                {total === 0 && <div><h2>No Items In Cart!</h2></div>}
                {total > 0 && <div className='cart-final-total'>
                    Total: ${total}
                </div>}
                {total > 0 &&<div className='cart-checkout'>
                    <button>Checkout</button>
                </div>}
                <div className='cart-continue'>
                    <Link to='/shopping-cart/shop'><button>Continue Shopping</button></Link>
                </div>
            </div>
        </div>
    );
}

export default Cart;