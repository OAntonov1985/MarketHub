import Image from 'next/image';
import React from 'react';
import { useState, useEffect } from 'react';
import formattedPrice from '../HelperFunctions/FormattedPrice';
import { deleteItemInBasket, reduceGood, totalGoods, setTotalPriseInAllBasket, setUserBasket } from '@/slices/userSlice';
import { useDispatch } from 'react-redux';
import Link from 'next/link';



function BaskerGoodRow({ props }) {

    const { id, title, thumbnail, number, price, totalPrice } = props;
    const dispatch = useDispatch();
    // console.log(id)


    const reduseGoodQuantity = (e) => {
        dispatch(reduceGood(id));
    };

    const deleteGood = (e) => {
        dispatch(deleteItemInBasket(id))
    };

    function updateData() {
        dispatch(setUserBasket(
            {
                id: id,
                title: title,
                price: price,
                thumbnail: thumbnail,
                number: 1,
                totalPrice: price
            }
        ));
    }



    return (
        <div className="basket-with-good-item">
            <Link className='good-item-description-title after-533' href={`/${id}/${title}/${id}`}>{title.split(' ').slice(0, 3).join(' ')}</Link>
            <div className='good-item-left-column'>
                <Link className="good-item-image" href={`/${id}/${title}/${id}`}>
                    <div className='good-item-image-container'>
                        <Image
                            alt="image of good"
                            src={thumbnail}
                            quality={100}
                            fill
                            sizes="(width: 100%)"
                            style={{
                                objectFit: 'cover',
                                width: '100%'
                            }}
                        />
                    </div>
                </Link>

                <div className='good-item-description-column'>
                    <Link className='good-item-description-title before-533' href={`/${id}/${title}/${id}`}>{title.split(' ').slice(0, 3).join(' ')}</Link>
                    <div className='good-item-description-number'>
                        <div className='good-item-description-selsector-number'>
                            <div className="selsector-number-minus">
                                <Image
                                    onClick={reduseGoodQuantity}
                                    id={id}
                                    alt="image of good"
                                    src="/minus1.svg"
                                    quality={100}
                                    fill
                                    sizes="(max-width: 100%)"
                                    style={{
                                        objectFit: 'contain',
                                        width: '100%'
                                    }}
                                />
                            </div>
                            <div className="selsector-number-number">{number}</div>
                            <div className="selsector-number-plus"
                                onClick={updateData}>
                                <Image
                                    id={id}
                                    alt="image of good"
                                    src="/plus1.svg"
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
                    <div className='good-item-description-total-price'>{formattedPrice(price)} грн х {number} шт</div>
                </div>
            </div>


            <div className='good-item-right-column'>
                <div className='good-item-total-cross'>
                    <div className='good-item-total-cross-image-container'>
                        <Image onClick={deleteGood}
                            id={id}
                            alt="image of good"
                            src="/close-outline.png"
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
                <div className='good-item-total-price'>{formattedPrice(totalPrice)} грн</div>
            </div>
        </div>
    )
}

export default React.memo(BaskerGoodRow);