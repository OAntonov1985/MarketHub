import React from 'react';
import BasketForm from './BasketForm';


function BasketRecepientInfo() {
    return (
        <>
            <h4 className='basket-with-goods-title'>Отримувач</h4>
            <BasketForm />
        </>
    )
};

export default React.memo(BasketRecepientInfo);