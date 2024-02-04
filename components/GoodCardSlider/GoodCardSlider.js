import React from 'react';
import { useState } from 'react';
import Image from 'next/image';

function GoodCardSlider({ props }) {
    const { id, title, price, description, category, image, thumbnail, images } = props


    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    const nextIndex = (currentIndex + 1) % images.length;

    return (
        <div className="good-card-left-column">
            <div className='good-card-medium-pfoto-column'>
                {[prevIndex, currentIndex, nextIndex].map((index) => {
                    return (
                        <div key={index}
                            className={`good-card-medium-pfoto-item ${index === 0 ? "one" : ''}`}>
                            {/* className="good-card-medium-pfoto-item"> */}
                            <div className="medium-pfoto-container">
                                <Image
                                    alt="image of good"
                                    // src={images[0]}
                                    src={images[index]}
                                    quality={100}
                                    fill
                                    sizes="(max-width: 100%)"
                                    style={{
                                        objectFit: 'contain',
                                        width: '100%'
                                    }}
                                />
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className='good-card-big-pfoto-column'>
                <div className='good-card-big-pfoto-container'>
                    <Image
                        alt="image of good"
                        // src={image ? image : thumbnail}
                        // src={images[images.length - currentIndex - 1]}
                        src={images[currentIndex]}
                        quality={100}
                        fill
                        sizes="(max-width: 100%)"
                        style={{
                            objectFit: 'contain',
                            width: '100%'
                        }}
                    />
                </div>
            </div>
            <button onClick={nextSlide}>Prev</button>
            <button onClick={prevSlide}>NEXT</button>
        </div>
    );
};

export default React.memo(GoodCardSlider);