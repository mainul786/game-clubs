import React, { useEffect, useState } from 'react';
import './Sports.css';
import Sport from '../Sport/Sport';

const Sports = () => {
    const [sports, setSports] = useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setSports(data))
    }, [])

    return (
        <div className='sports'>
            <div className='sport-container'>
           
                {
                    sports.map( sport => <Sport
                    id={sport.id}
                    sport={sport}
                    ></Sport>)
                }
            </div>
            <div>
                <h4>excersize data</h4>
            </div>
        </div>
    );
};

export default Sports;