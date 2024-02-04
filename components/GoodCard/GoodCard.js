import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Image from 'next/image';
import BreadCrumps from '../Breadcrumps/Breadcrumps';
import formattedPrice from '../FormattedPrice/FormattedPrice';
import GoodCardSlider from '../GoodCardSlider/GoodCardSlider';
import React from 'react';


export default function GoodCard({ props }) {
    const { title, price, description } = props


    return (
        <div className="good-card">
            <Header />
            <div className="good-card-main-content">
                <BreadCrumps />
                <div className="good-card-container">
                    <GoodCardSlider props={props} />



                    <div className="good-card-right-column">
                        <h4 className='good-card-title'>{title}</h4>
                        <div className='good-card-tech-info'>
                            <p className="good-card-number">Код товару: 23365</p>
                            <p className='top-sellers-availability'>Є в  наявності</p>
                        </div>
                        <div className="good-card-description">
                            <p className='description-title'>Опис товару</p>
                            <p className='description-text'>{description}
                            </p>
                        </div>
                        <p className='good-card-price'>{formattedPrice(price)} грн</p>
                        <div className='godd-card-added'>
                            <button className='good-card-buy-good'>Додати до кошика
                                <div className='good-card-logo-container'>
                                    <Image
                                        alt="image of basket logo"
                                        src="/basket.svg"
                                        quality={100}
                                        fill
                                        sizes="(max-width: 100%)"
                                        style={{
                                            objectFit: 'contain',
                                            width: '100%'
                                        }}
                                    />
                                </div>
                            </button>
                            <button className='good-card-add-to-favorite'>Додати до улюбленого
                                <div className='good-card-logo-container'>
                                    <Image
                                        alt="image of basket heart"
                                        src="/heardlogo.svg"
                                        quality={100}
                                        fill
                                        sizes="(max-width: 100%)"
                                        style={{
                                            objectFit: 'contain',
                                            width: '100%'
                                        }}
                                    />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
};

// export default React.memo(GoodCard);