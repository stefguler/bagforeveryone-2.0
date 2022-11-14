import React, { useState } from 'react'
import { 
    ImageSliderDiv,
} from './About.styles'

const ImageSlider = ({slides}) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const slideStyles = {
        maxWidth: '100vw',
        height: '100vh',
        backgroundImagePosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${slides[currentIndex].url})`
    }

    const leftArrowStyles = {
        position: 'absolute',
        top: '50%',
        transform: 'translate(0, -50%)',
        left: '32px',
        fontSize: '45px',
        color: '#fff',
        zIndex: 1, 
        cursor: 'pointer',
    }
    
    const rightArrowStyles = {
        position: 'absolute',
        top: '50%',
        transform: 'translate(0, -50%)',
        right: '32px',
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
            <div style={leftArrowStyles} onclick={goToPrevious}>←</div>
            <div style={rightArrowStyles} onclick={goToNext}>→</div>
            <div style={slideStyles}></div>
        </ImageSliderDiv>
    )
}

export default ImageSlider;

