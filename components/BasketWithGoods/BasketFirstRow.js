import Image from 'next/image';
import React from 'react';
import Cookies from 'js-cookie';
import formattedPrice from '../HelperFunctions/FormattedPrice';

function BasketFirstRow() {
    // const BASKET = Cookies.get('BASKET');
    // const basketArr = JSON.parse(BASKET);
    // console.log(JSON.parse(BASKET))
    // // let basketArr
    // const [cookies, setCookie] = useCookies();
    // const basketArr = cookies.BASKET
    // console.log(basketArr)

    return (
        <div className='basket-first-row'>
            <h4 className='basket-with-goods-title'>Кошик</h4>
            <div className="basket-with-goods-list">
                {/* {basketArr.map((item, index) => {
                    return (
                        <div className="basket-with-good-item" key={index}>
                            <div className='good-item-left-column'>
                                <div className="good-item-image">
                                    <div className='good-item-image-container'>
                                        <Image
                                            alt="image of good"
                                            // src="/notebook-mini.png"
                                            src={item.thumbnail}
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

                                <div className='good-item-description-column'>
                                    <div className='good-item-description-title'>{item.title}</div>
                                    <div className='good-item-description-number'>
                                        <div className='good-item-description-selsector-number'>
                                            <div className="selsector-number-minus">
                                                <Image
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
                                            <div className="selsector-number-number">{item.number}</div>
                                            <div className="selsector-number-plus">
                                                <Image
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
                                    <div className='good-item-description-total-price'>{item.price} грн х {item.number} шт</div>
                                </div>
                            </div>


                            <div className='good-item-right-column'>
                                <div className='good-item-total-cross'>
                                    <div className='good-item-total-cross-image-container'>
                                        <Image
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
                                <div className='good-item-total-price'>{formattedPrice(item.price * item.number)} грн</div>
                            </div>
                        </div>
                    )
                })} */}
            </div>
        </div>
    )
};


export default React.memo(BasketFirstRow);