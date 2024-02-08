import React from 'react';
import { useState } from 'react';
import Image from 'next/image';

function GoodCardSlider({ props }) {
    const { id, title, price, description, category, image, thumbnail, images } = props


    const [currentIndex, setCurrentIndex] = useState(0);
    const [biggerPfoto, setBiggerPfoto] = useState(false)

    const nextSlide = (event) => {
        event.stopPropagation();
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = (event) => {
        event.stopPropagation();
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    const nextIndex = (currentIndex + 1) % images.length;


    // console.log(biggerPfoto)
    const enlargeThePhoto = (event) => {
        event.stopPropagation();
        setBiggerPfoto(!biggerPfoto)
    }


    return (
        <div className="good-card-left-column">
            <div className='good-card-medium-pfoto-column'>
                {[prevIndex, currentIndex, nextIndex].map((index) => {
                    return (
                        <div key={index}
                            className="good-card-medium-pfoto-item">
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
            <div className={`good-card-big-pfoto-column ${biggerPfoto ? ' ' : "bigger-ptoto"}  `}


                onClick={enlargeThePhoto}>
                <div className="good-card-prev-button" onClick={nextSlide}>
                    <div className="image-container-arrow">
                        <Image
                            alt="image of good"
                            // src={images[0]}
                            src="/arrow1.svg"
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
                <div className="good-card-next-button" onClick={prevSlide}>
                    <div className="image-container-arrow">
                        <Image
                            alt="image of good"
                            // src={images[0]}
                            src="/arrow2.svg"
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
        </div>
    );
};

export default React.memo(GoodCardSlider);