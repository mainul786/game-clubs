import React from 'react';
import './Excersize.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Personal from '../Personal/Personal';

const Excersize = ({ cart }) => {
    const notify = () => toast("Wow so easy !");
    //console.log(cart);
    let total = 0;
   let show = [];
    for (const sport of cart) {
    //    const t = cart[sport] = ;
        const time = sport.time;
        show.push(time);
        total = total + sport.time;
        
    }
    return (
        <div>
            <h1>Excersize Details</h1>
            <Personal></Personal>
            <div className='excersize-details'>
                <h2>Excersize Details:{cart.length}</h2>
                <p>Total:{total}</p>
                <p className='show-time'>{show}</p>
            </div>
            <button className='btn-toost' onClick={notify}>Add Activities</button>
            <ToastContainer />
        </div>
    );
};

export default Excersize;