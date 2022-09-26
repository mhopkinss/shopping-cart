import React from 'react';
import {Link} from 'react-router-dom';

function Navbar({items}) {
let total = 0

items.forEach(item => {
    total += item.quantity
})

console.log(total)

let style = {
    textDecoration: "none",
    color: 'white'
}
    return (
        <div className='navbar-container'>
            <div className='nav-title'>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-atom" width="77" height="77" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#009dff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <line x1="12" y1="12" x2="12" y2="12.01" />
                    <path d="M12 2a4 10 0 0 0 -4 10a4 10 0 0 0 4 10a4 10 0 0 0 4 -10a4 10 0 0 0 -4 -10" transform="rotate(45 12 12)" />
                    <path d="M12 2a4 10 0 0 0 -4 10a4 10 0 0 0 4 10a4 10 0 0 0 4 -10a4 10 0 0 0 -4 -10" transform="rotate(-45 12 12)" />
                </svg>
                <Link to='/shopping-cart/home' style={style}><h1>Atomic Cameras</h1></Link>
            </div>
            <div className='nav-links'>
                <Link to='/shopping-cart/home' style={style}><h3>Home</h3></Link>
                <Link to='/shopping-cart/shop' style={style}><h3>Shop</h3></Link>
                <Link to='/shopping-cart/cart' style={style}><h3>{items.length > 0 ? `Cart (${total})`: `Cart`}</h3></Link>
            </div>
        </div>
    );
}

export default Navbar;