import React from 'react';
import { useRouter } from 'next/router';


function EmptyFavorite() {
    const router = useRouter();
    return (
        <div className='empty-favorite'>
            <h4 className='basket-with-goods-title'>Ви ще нічого не додали до улюбленого:(</h4>
            <button className='empty-favorite-button' onClick={() => router.push("/")}>
                Перейти до покупок
            </button>
        </div>
    )
}

export default React.memo(EmptyFavorite)