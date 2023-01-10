import React from 'react';
import './Education.css';
import background from '../../../srcimages/Lunch_atop_a_Skyscraper_-_Charles_Clyde_Ebbets.jpg'
import Navbar from '../../Navbar';

export default function Education() {
    return (
        <>
            <Navbar />
            <h1 className='education' style={{ backgroundImage: `url(${background})` }}>education</h1>
        </>
    )
}