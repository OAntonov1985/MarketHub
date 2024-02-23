import Image from 'next/image';
import formattedPrice from '../HelperFunctions/FormattedPrice';
import React from 'react';
import { useDispatch } from 'react-redux';
import { increaseGood, setTotalPriseInAllBasket, setUserBasket } from '@/slices/userSlice';




function GoodCardDescription({ props }) {
    const { title, description, price, thumbnail, id } = props;
    const dispatch = useDispatch();

    const addGoodToBasket = () => {
        dispatch(setUserBasket(
            {
                id: id,
                title: title,
                price: price,
                thumbnail: thumbnail,
                number: 1,
                totalPrice: price
            }
        ))
    };


    function basket() {
        console.log(localStorage.getItem("BASKET"))

    }

    return (
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
                <button className='good-card-buy-good'
                    onClick={addGoodToBasket}
                >Додати до кошика
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
                <button className='good-card-add-to-favorite' onClick={basket}>Додати до улюбленого
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
    )
};

export default React.memo(GoodCardDescription);