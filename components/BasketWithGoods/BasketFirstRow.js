import React from 'react';
import BaskerGoodRow from './BaskerGoodRow';
import { useSelector } from 'react-redux';

function BasketFirstRow() {
    const { userBasket } = useSelector((state) => state.user);

    return (
        <div className='basket-first-row'>
            <h4 className='basket-with-goods-title'>Кошик</h4>
            <div className="basket-with-goods-list">
                {userBasket.map((item, index) => (
                    <BaskerGoodRow key={index} props={item} />
                ))}
            </div>
        </div>
    )
};

export default React.memo(BasketFirstRow);

