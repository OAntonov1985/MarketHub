import Image from 'next/image';
import formattedPrice from '../HelperFunctions/FormattedPrice';
import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUserFavorite, setUserBasket } from '@/slices/userSlice';




function GoodCardDescription({ props, breadCrumpData }) {

    const [isVisibleAllDescription, setIsVisibleAllDescription] = useState(false);
    const [textInButton, setTextInButton] = useState("Докладніше");


    const { title, description, price, thumbnail, available, seller_id } = props;
    const { id } = breadCrumpData;
    const dispatch = useDispatch();
    const { userFavorite } = useSelector((state) => state.user);
    const arrayIndex = userFavorite.findIndex(item => {
        return item.id === id
    });




    const formattedDescription = description.map(sentence => `<p class="description_par">${sentence}</p>`).join('\n');

    const addGoodToBasket = () => {
        if (available) {
            dispatch(setUserBasket(
                {
                    id: id,
                    title: title,
                    price: price,
                    thumbnail: thumbnail,
                    number: 1,
                    totalPrice: price,
                    seller_id: seller_id
                }
            ));
        }
    };

    function addGoodToFavorite() {
        dispatch(setUserFavorite(
            {
                id: id,
                title: title,
                price: price,
                thumbnail: thumbnail,
                number: 1,
                available: available
            }
        ))
    }

    useEffect(() => {
        if (isVisibleAllDescription) setTextInButton("Сховати детальний опис")
        else setTextInButton("Докладніше")

    }, [isVisibleAllDescription])

    return (
        <div className="good-card-right-column">
            {/* <h4 className='good-card-title'>{title.split(' ').slice(0, 4).join(' ')}</h4> */}
            <div>
                <div className="header-info-laptop">
                    <h4 className='good-card-title'>{title.split(' ').slice(0, 4).join(' ')}</h4>
                    <div className='good-card-tech-info'>
                        <p className="good-card-number">Код товару: {id}</p>
                        <p className={`top-sellers-availability ${available ? "" : "noavailability"}`}>{available ? "Є в  наявності" : "Немає в наявності"}</p>
                    </div>
                </div>
                <div className="good-card-description">
                    <p className='description-title'>Опис товару</p>
                    <p className="description_par">{title}</p>
                    <div className={`description-text ${!isVisibleAllDescription ? null : "height-auto"}`} dangerouslySetInnerHTML={{ __html: formattedDescription }} />
                    <button className='all-text-view' onClick={() => setIsVisibleAllDescription(!isVisibleAllDescription)}>{textInButton}</button>
                </div>
            </div>
            <div>
                <p className='good-card-price'>{formattedPrice(price)} грн</p>
                <div className='godd-card-added'>
                    <button className='good-card-buy-good'
                        onClick={addGoodToBasket}>Додати до кошика
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
                    <button className='good-card-add-to-favorite' onClick={addGoodToFavorite}>{arrayIndex === -1 ? "Додати до улюбленого" : "Видалити з улюбленого"}
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
    )
};

export default React.memo(GoodCardDescription);