import Image from 'next/image';
import Link from 'next/link';
import formattedPrice from '../HelperFunctions/FormattedPrice';
import React from 'react';
import { addToBasketFrom } from '../GoodCardDescription/GoodCardDescription';
import { useDispatch } from 'react-redux';
import { setTotalPriseInAllBasket } from '@/slices/userSlice';



function GoodCardSmall({ props }) {
    const dispatch = useDispatch();
    const { id, photo_preview, name, price, available, category_id, sub_category_id, title, images, image } = props;
    // console.log(props)




    function addToBasket() {
        // const number = 0;
        // const BASKET = localStorage.getItem("BASKET");
        // const basketArr = JSON.parse(BASKET);

        // if (basketArr === null || !basketArr || basketArr.length === 0) {

        //     const basketObject = [{
        //         id: id,
        //         title: title,
        //         thumbnail: { image: image ?? "/defaultPhoto.png" },
        //         price: price,
        //         number: number + 1,
        //         totalPrice: price
        //     }];

        //     const basketJSON = JSON.stringify(basketObject);
        //     localStorage.setItem("BASKET", basketJSON);

        //     const totalGoodsInLocalStorage = JSON.stringify(1)
        //     localStorage.setItem("totalGoods", totalGoodsInLocalStorage);

        //     const totalPriseInAllBasket = JSON.stringify(price)
        //     localStorage.setItem("totalPriseInAllBasket", totalPriseInAllBasket);

        //     dispatch(setTotalPriseInAllBasket(price));
        //     return
        // }
        // if (basketArr !== null) {
        //     const arrayIndex = basketArr.findIndex(item => {
        //         return item.id === id
        //     })
        //     ///// якщо даний товар вже є в кошику/////
        //     if (arrayIndex >= 0) {

        //         basketArr[arrayIndex].number += 1;
        //         basketArr[arrayIndex].totalPrice = price * basketArr[arrayIndex].number;

        //         const updatedBasketJSON = JSON.stringify(basketArr);
        //         localStorage.setItem('BASKET', updatedBasketJSON);

        //         const newTotalGoods = basketArr.reduce((accum, item) => accum = accum + item.number, 0);
        //         localStorage.setItem('totalGoods', newTotalGoods);

        //         const newTotalPriseInAllBasket = basketArr.reduce((accum, item) => accum = accum + (item.price * item.number), 0);
        //         localStorage.setItem('totalPriseInAllBasket', newTotalPriseInAllBasket);

        //         dispatch(setTotalPriseInAllBasket(newTotalPriseInAllBasket));
        //     }
        //     ///// якщо додаємо товар, якого немає в кошику але в кошику вже є товари/////
        //     else {
        //         const basketObject = {
        //             id: id,
        //             title: title,
        //             thumbnail: { image: image ?? "/defaultPhoto.png" },
        //             price: price,
        //             number: number + 1,
        //             totalPrice: price
        //         };
        //         basketArr.push(basketObject);
        //         const jsonString = JSON.stringify(basketArr);
        //         localStorage.setItem("BASKET", jsonString);

        //         const newTotalGoods = basketArr.reduce((accum, item) => accum = accum + item.number, 0);
        //         localStorage.setItem('totalGoods', newTotalGoods);

        //         const newTotalPriseInAllBasket = basketArr.reduce((accum, item) => accum = accum + item.totalPrice, 0);
        //         localStorage.setItem('totalPriseInAllBasket', newTotalPriseInAllBasket);

        //         dispatch(setTotalPriseInAllBasket(newTotalPriseInAllBasket));
        //     }
        // }
    }


    // console.log(props.id)
    return (
        <div key={props.id}
            href="/[category]/[subcategory]/[id]" as={`/${id}/${title}/${id}`}
            className="top-sellers-item">
            <div className="image-container-top-sellers">
                <div className='container-for-icon-favorite' id={id} onClick={addToBasket}>
                    <Image
                        id={props.id}
                        onClick={addToBasket}
                        className='favorite-icon'
                        alt="icon of favorite"
                        src="/heardincart.svg"
                        quality={100}
                        fill
                        sizes="(max-width: 100%)"
                        style={{
                            objectFit: 'contain',
                            width: '100%'
                        }}
                    >

                    </Image>
                </div>
                <div className='container-for-icon-add-to-basket' id={id} onClick={addToBasket}>
                    <Image
                        id={id}
                        className='basket-icon'
                        onClick={addToBasket}
                        alt="icon of basket"
                        src="/basketincard.svg"
                        quality={100}
                        fill
                        sizes="(max-width: 100%)"
                        style={{
                            objectFit: 'contain',
                            width: '100%'
                        }}
                    >

                    </Image>
                </div>
                <div className="container-for-imafe-top-sellers">
                    <Image
                        alt="image of good"
                        // src={photo_preview ? photo_preview : (props.images[1] ? props.images[1] : "/promotionsImage/headphones.png")}
                        src={photo_preview ? photo_preview : (props.images && props.images.length > 1 ? images[0] : (props.image ? props.image : '/defaultPhoto.png'))}
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
            {/* <p className='top-sellers-item-title'>{name}</p> */}
            <p className='top-sellers-item-title'>{title}</p>
            <div className='top-sellers-prise-and-availability'>
                <p className='top-sellers-price'>{formattedPrice(price)} грн</p>
                {/* <p className='top-sellers-price'>{price} грн</p> */}
                {/* <p className={`top-sellers-availability ${available ? '' : 'noavailability'}`}> */}
                <p className={`top-sellers-availability ${id !== undefined ? '' : 'noavailability'}`}>
                    {/* {available === true ? "Є в наявності" : "Немає в наявності"} */}
                    {id !== undefined ? "Є в наявності" : "Немає в наявності"}
                </p>
            </div>
        </div>
    );
};

export default React.memo(GoodCardSmall);
