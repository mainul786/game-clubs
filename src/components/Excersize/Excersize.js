import React, { useState } from 'react';
import './Excersize.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Personal from '../Personal/Personal';

const Excersize = ({ cart }) => {
    const [time, setTime] = useState([])
    const notify = () => toast("My activity is complated!");
    //console.log(cart);
    let total = 0;
    let show = [];
    for (const sport of cart) {
        const time = sport.time;
        show.push(time);
        total = total + sport.time;

    }

    const handleShowData = (show) => {
        setTime(show);
    }

    return (
        <div>
            <h1>Excersize Details</h1>
            <Personal></Personal>
            <h3>Add A Break</h3>
            <div className='break'>
                {/* <p className='show-time'>{show}</p> */}
                <ul>
                    <li onClick={()=>{handleShowData(show)}}>{show}</li>

                </ul>
            </div>
            <div className='excersize-details'>

                <h2>Excersize info:</h2>
                <p>Total: {total}</p>
                <p>{time}</p>

            </div>
            <button className='btn-toost' onClick={notify}> Activities </button>
            <ToastContainer />
        </div>
    );
};

export default Excersize;