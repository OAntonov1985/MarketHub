import Image from 'next/image';
import React from 'react';
import { useState } from 'react';
import formattedPrice from '../HelperFunctions/FormattedPrice';
import { increaseGood, reduceGood, totalGoods } from '@/slices/userSlice';
import { useDispatch } from 'react-redux';
import Link from 'next/link';



function BaskerGoodRow({ props, setBasket, basket, setTotalGoods, setTotalQuantityOfGoods, setBasketLength }) {

    const { id, title, thumbnail, number, price } = props
    const [count, setCount] = useState(number);
    const [total, setTotal] = useState(count * price);
    const dispatch = useDispatch();

    const increaceGoodQuantity = (e) => {
        setCount(count + 1);
        dispatch(totalGoods(count + 1));

        setTotal((count + 1) * price);
        const index = basket.findIndex(item => item.id == e.target.id);
        basket[index].number = count + 1;

        setBasket(basket);
        const newTotalGoods = basket.reduce((accum, item) => accum = accum + item.number, 0);
        localStorage.setItem('totalGoods', newTotalGoods);

        const newlength = basket.length;
        setBasketLength(newlength);

        localStorage.setItem('BASKET', JSON.stringify(basket));

        setTotalGoods(basket.reduce((accum, item) => accum = accum + item.number, 0));
        setTotalQuantityOfGoods(basket.reduce((acc, product) => {
            return acc + (product.price * product.number);
        }, 0));
    }

    const reduseGoodQuantity = (e) => {
        if (count > 1) {
            setCount(count - 1);
            dispatch(totalGoods(count - 1));
            setTotal((count - 1) * price);
            const index = basket.findIndex(item => item.id == e.target.id);
            basket[index].number = count - 1;

            setBasket(basket);

            const newlength = basket.length;
            setBasketLength(newlength);

            const newTotalGoods = basket.reduce((accum, item) => accum = accum + item.number, 0);
            localStorage.setItem('totalGoods', newTotalGoods);
            localStorage.setItem('BASKET', JSON.stringify(basket));

            setTotalGoods(basket.reduce((accum, item) => accum = accum + item.number, 0));
            setTotalQuantityOfGoods(basket.reduce((acc, product) => {
                return acc + (product.price * product.number);
            }, 0));
        }
        else return;
    }



    const deleteGood = (e) => {
        const result = confirm(`Ви точно бажаєте видалити ${title}?`);
        if (result === true) {
            const updatedBasket = basket.filter(item => item.id != e.target.id);

            const newTotalGoods = updatedBasket.reduce((accum, item) => accum = accum + item.number, 0);
            localStorage.setItem('totalGoods', newTotalGoods);
            dispatch(totalGoods(newTotalGoods))
            localStorage.setItem('BASKET', JSON.stringify(updatedBasket));
            setBasket(updatedBasket);
            setBasketLength(updatedBasket.length);
        }
        else return;
    }


    return (
        <div className="basket-with-good-item">
            <div className='good-item-left-column'>
                <Link className="good-item-image" href={`http://localhost:3000/${id}/${title}/${id}`}>
                    <div className='good-item-image-container'>
                        <Image
                            alt="image of good"
                            src={thumbnail}
                            quality={100}
                            fill
                            sizes="(max-width: 100%)"
                            style={{
                                objectFit: 'contain',
                                width: '100%'
                            }}
                        />
                    </div>
                </Link>

                <div className='good-item-description-column'>
                    <Link className='good-item-description-title' href={`http://localhost:3000/${id}/${title}/${id}`}>{title}</Link>
                    <div className='good-item-description-number'>
                        <div className='good-item-description-selsector-number'>
                            <div className="selsector-number-minus">
                                <Image
                                    onClick={(e) => { reduseGoodQuantity(e); dispatch(reduceGood()) }}
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
                            <div className="selsector-number-number">{count}</div>
                            <div className="selsector-number-plus"
                                onClick={(e) => { increaceGoodQuantity(e); dispatch(increaseGood()) }}                            >
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
                    <div className='good-item-description-total-price'>{formattedPrice(price)} грн х {count} шт</div>
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
                <div className='good-item-total-price'>{formattedPrice(total)} грн</div>
            </div>
        </div>
    )
}

export default React.memo(BaskerGoodRow);