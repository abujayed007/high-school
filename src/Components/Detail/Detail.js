import React from 'react';
import './Details.css'

const Detail = ({detail}) => {
    console.log(detail)
    const {img, facility, id, title, rating, openHour} = detail
    return (
        <div className='col '>
            <div>
            <img className='image' src={detail.img} alt="" />
            </div>
            <div>
            <h2>{detail.facility}</h2>
            <h3>{rating}</h3>
            </div>
        </div>
    );
};

export default Detail;