import Image from 'next/image';
import React from 'react';

function BasketWithGoods() {
    return (
        <div className='basket-with-goods'>
            <h3 className='basket-with-goods-title'>Кошик</h3>
            <div className="basket-with-goods-list">
                <div className="basket-with-good-item">
                    <div className='good-item-left-column'>
                        <div className="good-item-image">
                            <div className='good-item-image-container'>
                                <Image
                                    alt="image of good"
                                    src="/notebook-mini.png"
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
                            <div className='good-item-description-title'>Ноутбук DELL Latitude 5540 Grey</div>
                            <div className='good-item-description-number'>
                                <div className='good-item-description-selsector-number'>2</div>
                            </div>
                            <div className='good-item-description-total-price'>54 599 грн х 1 шт</div>
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
                        <div className='good-item-total-price'>51 599 грн</div>
                    </div>
                </div>

                <div className="basket-with-good-item"></div>
                <div className="basket-with-good-item"></div>
            </div>
        </div>
    )
};

export default React.memo(BasketWithGoods);