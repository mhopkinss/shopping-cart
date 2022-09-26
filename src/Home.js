import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';

function Home() {
    useEffect(() => {
        document.body.classList.add("overflow-hidden");
        return () => {
            document.body.classList.remove("overflow-hidden");
        };
 }, []);
    return (
        <div className='home'>
            <div className='center'>
                <h1>#1 Destination For Film Cameras</h1>
                <Link to='/shopping-cart/shop'><button>Shop Now</button></Link>
            </div>
        </div>
    );
}

export default Home;