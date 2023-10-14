import React from 'react';
import './Sport.css';

const Sport = (props) => {
    const { img, name, age, time, description } = props.sport;
    // console.log(props)
    return (
        <div className='sport'>
            <img src={img} alt="" />
            <div className='sport-info'>
                <h2>{name}</h2>
                <p>{description}</p>
                <p>Age:{age}</p>
                <p>Time:{time}</p>
            </div>
                <button className='btn-cart'>Add To Cart</button>
        </div>
    );
};

export default Sport;