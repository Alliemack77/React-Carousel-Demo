import React from 'react';
import '../css/carousel.css'


// renders the slide itself
const CarouselItem = ({children, width}) => {
    return (
        <div className="carousel-item" style={{ width: width}}>
            {children}
        </div>
    );
};

export default CarouselItem;