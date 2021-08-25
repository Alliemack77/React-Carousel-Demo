import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import '../css/carousel.css'

// the carousel
const Carousel = ({children}) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = 0;
        } else if (newIndex >= React.Children.count(children)) {
            newIndex = React.Children.count(children) - 1;
        }

        setActiveIndex(newIndex);
    }

    const handlers = useSwipeable({
        onSwipedLeft: () => updateIndex(activeIndex + 1),
        onSwipedRight: () => updateIndex(activeIndex - 1)
    });

    return (

        <div { ...handlers} className="carousel">
            <div className="inner" style={{transform: `translateX(-${activeIndex * 50}%)`}}>
                {
                   React.Children.map(children, (child, index) => {
                       return React.cloneElement(child, {width: "50%"});
                   }) 
                }
            </div>
            <div className="indicators">
                <button onClick={() => {updateIndex(activeIndex - 1)}}>Prev</button>
              
                {
                    React.Children.map(children, (child, index) => {
                        return (
                            <button className={`dots ${index === activeIndex ? "active" : ""}`} onClick={() => {updateIndex(index)}}></button>
                        )
                    })
                }

                <button onClick={() => {updateIndex(activeIndex + 1)}}>Next</button>
            </div>
        </div>
    )
}

export default Carousel;

