import React, { useEffect, useState } from 'react';
import './gallery-carousel.scss';

const imageRefs = [
    '../../../../public/images/games_1.jpg',
    '../../../../public/images/games_2.jpg',
    '../../../../public/images/games_3.jpg',
    '../../../../public/images/games_5.jpg',
    '../../../../public/images/games_4.jpg',
    '../../../../public/images/games_1.jpg',
    '../../../../public/images/games_2.jpg',
    '../../../../public/images/games_3.jpg',
    '../../../../public/images/games_5.jpg'
]

export function GalleryCarousel({ }) {

    var carousel;
    var cells;
    var cellCount; // cellCount set from cells-range input value
    var radius, theta;
    var [selectedIndex, setSelectIndex] = useState(0);

    var prevButton, nextButton;

    function rotateCarousel() {
        radius = Math.round( ( carousel.offsetWidth / 2) / Math.tan( Math.PI / 9 ) );
        var angle = 45 * selectedIndex * -1;
        document.querySelector('.carousel').style.transform = 'translateZ(' + -radius + 'px) ' +
            'rotateY' + '(' + angle + 'deg)';
    }



    useEffect(() => {
        prevButton = document.querySelector('.previous-button');
        nextButton = document.querySelector('.next-button');

        carousel = document.querySelector('.carousel');
        cells = document.querySelectorAll('.carousel__cell');
    }, [selectedIndex])

    function next() {
        var val = selectedIndex+1;
        setSelectIndex(val);
        setTimeout(()=>rotateCarousel(),500);
    }
    function prev() {
        var val = selectedIndex-1;
        setSelectIndex(val);
        setTimeout(()=>rotateCarousel(),500);
    }


    return (
        <>
            <div className="scene">
                <div className="carousel">
                    {
                        imageRefs.map((link, idx) =>
                            <div className='carousel__cell'>
                                <img
                                    key={idx}
                                    src={link}
                                />
                            </div>

                        )
                    }
                </div>
            </div>
            <div className="carousel-options">
                <p>
                    <button onClick={prev} className="previous-button">Previous</button>
                    <button onClick={next} className="next-button">Next</button>
                </p>
            </div>
        </>
    );
}