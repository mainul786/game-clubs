import React from 'react';
import './Excersize.css';

const Excersize = ({cart}) => {
    //console.log(cart);
    let total = 0;
    for(const sport of cart){
        total = total + sport.time;
    }
    return (
        <div className='excersize-details'>
            <h2>Excersize Details:{cart.length}</h2>
            <p>Total:{total}</p>
        </div>
    );
};

export default Excersize;