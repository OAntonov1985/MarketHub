import React from 'react';
import { useRouter } from 'next/router';

function EmptySearch() {
    const router = useRouter();
    return (
        <div className='empty-categorie'>
            <h4 className='basket-with-goods-title'>Нажаль під дані критерії пошуку ми нічого не знайшли. Спробуйте ще :(</h4>
            <button className='empty-favorite-button' onClick={() => router.push("/")}>
                Перейти до покупок
            </button>
        </div>
    )
}

export default React.memo(EmptySearch);