import React from 'react';
import BasketForm from './BasketForm';

function BasketPlacingOrder() {
    return (
        <div className='basket-placing-order'>
            <h4 className='basket-with-goods-title'>Оформлення замовлення</h4>
            <p className='basket-with-goods-subtitle'>Введіть Ваші контактні дані</p>
            <div className='basket-with-goods-buttons-row'>
                <button className='basket-with-goods-new-customer active-button'>Я новий користувач</button>
                <button className='basket-with-goods-regular-customer unactive-button'>Я постійний клієнт</button>
            </div>
            <BasketForm />
        </div>
    )
}

export default React.memo(BasketPlacingOrder);