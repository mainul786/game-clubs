import React, { useEffect, useState } from 'react';
import './Sports.css';
import Sport from '../Sport/Sport';
import Excersize from '../Excersize/Excersize';

const Sports = () => {
    const [sports, setSports] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setSports(data))
    }, [])

    const handelAddToCart = sport => {
        console.log('clicked', sport)
         const newCart = [...cart, sport];
         setCart(newCart)
         console.log(cart)
    }
    return (
        <div className='sports'>
            <div className='sport-container'>

                {
                    sports.map(sport =>  <Sport
                        sport={sport}
                        id = {sport.id}
                        handelAddToCart={handelAddToCart}
                    ></Sport>)
                }
            </div>
            <div>
               <Excersize cart={cart}></Excersize>
            </div>
        </div>
    );
};

export default Sports;