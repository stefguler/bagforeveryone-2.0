import React, { useState } from 'react'
import { 
    ImageSliderDiv,
} from './About.styles'


const ImageSlider = ({slides}) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const slideStyles = {
        width: '100%',
        height: '500px',
        borderRadius: '15px',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(${slides[currentIndex].url})`,
    }

    const leftArrowStyles = {
        position: 'absolute',
        top: '50%',
        transform: 'translate(0, -50%)',
        left: '20vw',
        fontSize: '45px',
        color: '#fff',
        zIndex: 1, 
        cursor: 'pointer',
    }
    
    const rightArrowStyles = {
        position: 'absolute',
        top: '50%',
        transform: 'translate(0, -50%)',
        right: '20vw',
        fontSize: '45px',
        color: '#fff',
        zIndex: 1, 
        cursor: 'pointer',
    }

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }

    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    return (
        <ImageSliderDiv>
            <div style={slideStyles}>
                <div style={leftArrowStyles} onClick={goToPrevious}>←</div>
                <div style={rightArrowStyles} onClick={goToNext}>→</div>
            </div>
        </ImageSliderDiv>
    )
}

export default ImageSlider;

