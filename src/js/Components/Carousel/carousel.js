import React, { useEffect, useRef, useState } from 'react';
import './carousel.scss';
import { useInterval } from './useInterval';

const imageRefs = [
    '../../../../public/images/games_1.jpg',
    '../../../../public/images/games_2.jpg',
    '../../../../public/images/games_3.jpg',
    '../../../../public/images/games_5.jpg',
    '../../../../public/images/games_4.jpg'
]
export function Carousel(props) {
    var [currentSlideIndex, setCurrentIndex] = useState(0);
    var currentSlideRef = useRef(null);
    const [sliderLeftMargin, setSliderLeftMargin] = useState(0);

    function prevSlide() {
        handleSlideIndex(currentSlideIndex - 1);
    }
    function nextSlide() {
        handleSlideIndex(currentSlideIndex + 1);
    }

    function handleSlideIndex(index) {
        if (index > -1 && index < 5) {
            document.querySelector('.carousel-slide').style.transition = `transform 1s linear`;
            let size = document.getElementsByTagName('img')[0].clientWidth;
            document.querySelector('.carousel-slide').style.transform = `translateX(${-size * index}px)`;
            setCurrentIndex(index);
        }
        else if (index === 5) {
            let newIndex = index % 5;
            document.querySelector('.carousel-slide').style.transition = `none`;
            let size = document.getElementsByTagName('img')[0].clientWidth;
            document.querySelector('.carousel-slide').style.transform = `translateX(${size * newIndex}px)`;
            setCurrentIndex(newIndex);
        }
        else {
            document.querySelector('.carousel-slide').style.transition = `none`;
            let size = document.getElementsByTagName('img')[0].clientWidth;
            document.querySelector('.carousel-slide').style.transform = `translateX(${-size * (index + 5)}px)`;
            setCurrentIndex(4);
        }
    }

    useInterval(() => {
        handleSlideIndex(currentSlideIndex + 1);
    }, 3000)

    // useEffect(
    //     () => {
    //         const slideElem = currentSlideRef.current;

    //         const parentPos = slideElem.parentNode.getBoundingClientRect();
    //         const slidePos = slideElem.getBoundingClientRect();

    //         setSliderLeftMargin(parentPos.left - slidePos.left);
    //     },
    //     [currentSlideIndex]
    // );

    return (
        <>
            <button
                className="prev"
                onClick={prevSlide}
            >
                &#10094;
                </button>
            <div
                className="carousel-container"
                // style={{
                //     marginLeft: sliderLeftMargin
                // }}
            >
                <div className="carousel-slide">
                    {
                        imageRefs.map((link, idx) =>
                            <img
                                key={idx}
                                id={`hero-image-${idx}`}
                                src={link}
                                ref={
                                    currentSlideIndex === idx ? currentSlideRef : null
                                }
                            />
                        )
                    }
                </div>


                <div className="carousel_buttons">
                    {
                        imageRefs.map((link, idx) =>
                            <button
                                key={idx}
                                className={
                                    currentSlideIndex === idx
                                        ? 'indicator-active'
                                        : 'indicator'
                                }
                            />
                        )
                    }

                </div>

            </div>
            <button
                className="next"
                onClick={nextSlide}
            >
                &#10095;
            </button>
        </>
    )
}

Carousel.propTypes = {

}