import Image from 'next/image';
import React from 'react';
import { useState } from 'react';
import formattedPrice from '../HelperFunctions/FormattedPrice';


export default function BaskerGoodRow({ props, setBasket, basket }) {

    const { id, title, thumbnail, number, price } = props
    const [count, setCount] = useState(number);
    const [total, setTotal] = useState(count * price);




    const increaceGoodQuantity = (e) => {
        setCount(count + 1);
        setTotal((count + 1) * price);

        const index = basket.findIndex(item => item.id == e.target.id);
        // console.log(index)
        basket[index].number = count + 1;
        console.log(basket)
        setBasket(basket)


    }

    const reduseGoodQuantity = () => {
        if (count > 1) {
            setCount(count - 1);
            setTotal((count - 1) * price);
        }
        else alert("Видалити товар з кошика?");
    }


    return (
        <div className="basket-with-good-item">
            <div className='good-item-left-column'>
                <div className="good-item-image">
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
                </div>

                <div className='good-item-description-column'>
                    <div className='good-item-description-title'>{title}</div>
                    <div className='good-item-description-number'>
                        <div className='good-item-description-selsector-number'>
                            <div className="selsector-number-minus">
                                <Image onClick={reduseGoodQuantity}
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
                            <div className="selsector-number-plus" onClick={increaceGoodQuantity}>
                                <Image onClick={increaceGoodQuantity}
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
                    <div className='good-item-description-total-price'>{price} грн х {count} шт</div>
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
                <div className='good-item-total-price'>{formattedPrice(total)} грн</div>
            </div>
        </div>
    )
}

// export default React.memo(BaskerGoodRow);