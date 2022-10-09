import React, { createContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Detail from '../Detail/Detail';

const Home = () => {
    const school = useLoaderData( )
    return (
        <div className='row row-cols-3 row-cols-md-3'>
           {
            school.map(detail => <Detail key={detail._id} detail={detail}></Detail>)
           }
        </div>
    );
};

export default Home;