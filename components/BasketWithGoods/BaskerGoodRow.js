import Image from 'next/image';
import React from 'react';
import { useState, useEffect } from 'react';
import formattedPrice from '../HelperFunctions/FormattedPrice';
import { increaseGood, reduceGood, totalGoods, setTotalPriseInAllBasket } from '@/slices/userSlice';
import { useDispatch } from 'react-redux';
import Link from 'next/link';



function BaskerGoodRow({ props, setBasket }) {


    const { id, title, thumbnail, number, price } = props;

    const [count, setCount] = useState(number);
    const [total, setTotal] = useState(number * price);
    const dispatch = useDispatch();


    const increaceGoodQuantity = (e) => {
        setCount(count + 1);
        setTotal((count + 1) * price);
        dispatch(increaseGood());
        updateData("plus", e.target.id);
    }




    const reduseGoodQuantity = (e) => {
        if (count > 1) {
            setCount(count - 1);
            setTotal((count - 1) * price);
            dispatch(reduceGood(1));
            updateData("minus", e.target.id);
        }
        else return;
    }


    const deleteGood = (e) => {
        const result = confirm(`Ви точно бажаєте видалити ${title}?`);
        if (result === true) {
            updateData("delete", e.target.id)
        }
        else return;
    }

    function updateData(event, num) {
        const BASKET = localStorage.getItem("BASKET");
        let basketArr = JSON.parse(BASKET);
        const index = basketArr.findIndex(item => item.id == num);

        if (basketArr) {
            if (event === "plus") {
                basketArr[index].number = count + 1;
                basketArr[index].totalPrice = price * basketArr[index].number;
            }

            else if (event === "minus" && basketArr[index].numbe > 1) {
                basketArr[index].number = count - 1;
                basketArr[index].totalPrice = price * basketArr[index].number;
            }
            else if (event === "delete") {
                console.log(basketArr[index])
                const reduseGood = basketArr[index].number
                dispatch(reduceGood(reduseGood));
                basketArr.splice(index, 1);
                console.log(basketArr)
                const newIndex = basketArr.findIndex(item => item.id == num);
                // setCount(basketArr[newIndex].number);
                // setTotal(basketArr[newIndex].number * price)
                setBasket(basketArr);
            }

            const updatedBasketJSON = JSON.stringify(basketArr);
            localStorage.setItem('BASKET', updatedBasketJSON);

            const newTotalGoods = basketArr.reduce((accum, item) => accum = accum + item.number, 0);
            localStorage.setItem('totalGoods', newTotalGoods);

            const newTotalPriseInAllBasket = basketArr.reduce((accum, item) => accum = accum + (item.price * item.number), 0);
            localStorage.setItem('totalPriseInAllBasket', newTotalPriseInAllBasket);

            dispatch(setTotalPriseInAllBasket(newTotalPriseInAllBasket));
        };
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
                            <div className="selsector-number-number">{count}</div>
                            <div className="selsector-number-plus"
                                onClick={increaceGoodQuantity}>
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