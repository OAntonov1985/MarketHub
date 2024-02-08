import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

function EmptyBasket() {
    return (
        <div className='empty-basket'>
            <div className="empty-basket-image">
                <div className="empty-basket-image-container">
                    <Image
                        alt="image of good"
                        src="/basket.png"
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

            <p className="empty-basket-text">Ваш кошик порожній :(</p>
            <Link href="/">
                <button className="empty-basket-button">Перейти до покупок</button>
            </Link>
        </div>
    )
}

export default React.memo(EmptyBasket);