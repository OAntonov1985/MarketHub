import Image from 'next/image';
import formattedPrice from '../HelperFunctions/FormattedPrice';
import React from 'react';



function GoodCardDescription({ props }) {
    const { title, description, price, thumbnail, id } = props;
    const number = 0;

    const addGoodToBasket = () => {
        const BASKET = localStorage.getItem("BASKET");
        const basketArr = JSON.parse(BASKET);


        if (!basketArr) {
            const basketObject = [{
                id: id,
                title: title,
                thumbnail: thumbnail,
                price: price,
                number: number + 1
            }];
            const basketJSON = JSON.stringify(basketObject);
            localStorage.setItem("BASKET", basketJSON)
            return
        }

        if (basketArr !== null) {
            const arrayIndex = basketArr.findIndex(item => {
                return item.id === id
            })



            if (arrayIndex >= 0) {
                basketArr[arrayIndex].number += 1;
                const updatedBasketJSON = JSON.stringify(basketArr);
                localStorage.setItem('BASKET', updatedBasketJSON);
            }
            else {
                const basketObject = {
                    id: id,
                    title: title,
                    thumbnail: thumbnail,
                    price: price,
                    number: number + 1
                };
                basketArr.push(basketObject);
                const jsonString = JSON.stringify(basketArr);
                localStorage.setItem("BASKET", jsonString)
            }
        }
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
                <button className='good-card-buy-good' onClick={addGoodToBasket}>Додати до кошика
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

// export const addGoodToBasket = (title, description, price, thumbnail, id, number) => {
//     const BASKET = Cookies.get('BASKET');
//     // const number = 0;
//     if (BASKET === undefined) {
//         const basketObject = [{
//             id: id,
//             title: title,
//             thumbnail: thumbnail,
//             price: price,
//             number: number + 1
//         }];
//         const jsonString = JSON.stringify(basketObject);
//         Cookies.set('BASKET', jsonString);
//         return
//     }

//     if (BASKET !== undefined) {
//         const basketArr = JSON.parse(BASKET);
//         const arrayIndex = basketArr.findIndex(item => {
//             return item.id === id
//         })


//         if (arrayIndex >= 0) {
//             basketArr[arrayIndex].number = basketArr[arrayIndex].number + 1;
//             const jsonString = JSON.stringify(basketArr);
//             Cookies.set('BASKET', jsonString);
//         }
//         else {
//             const basketObject = {
//                 id: id,
//                 title: title,
//                 thumbnail: thumbnail,
//                 price: price,
//                 number: number + 1
//             };
//             basketArr.push(basketObject);
//             const jsonString = JSON.stringify(basketArr);
//             Cookies.set('BASKET', jsonString);
//         }
//     }
// };

export default React.memo(GoodCardDescription);