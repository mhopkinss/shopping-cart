import React from 'react';
import './index.css';

function Shop({add, data}) {
    let style = {
        width: '100%',
        height: '100%'
    }
    const items = data.map(item => {
        return <div className='card-container' key={item.id}>
                    <div>
                        <img src={item.url[0]} alt='camera' style={style}></img>
                    </div>
                    <div className='card-info'>
                        <h2>{item.cameraName}</h2>
                        <span>${item.price}</span>
                    </div>
                    <div className='card-button'>
                        <button onClick={add} data-id={item.id}>Add To Cart</button>
                    </div>
                </div>
    })
    return (
        <div className='shop-container'>
            {items}
        </div>
    );
}

export default Shop;