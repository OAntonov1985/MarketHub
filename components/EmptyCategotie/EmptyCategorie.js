import React from 'react';
import { useRouter } from 'next/router';

function EmptyCategorie() {
    const router = useRouter();
    return (
        <div className='empty-categorie'>
            <h4 className='basket-with-goods-title category-empty-title'>Тут поки що пусто :(</h4>
            <button className='empty-favorite-button' onClick={() => router.push("/")}>
                Перейти до покупок
            </button>
        </div>
    )
}

export default React.memo(EmptyCategorie);