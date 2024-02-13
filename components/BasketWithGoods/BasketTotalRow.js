import React from 'react';
import formattedPrice from '../HelperFunctions/FormattedPrice';

function BasketTotalRow({ totalGoods, totalQuantityOfGoods }) {

    return (
        <div className='basket-total-row'>
            <div className="basket-total-left-column">
                <h4 className='basket-with-goods-title modify-title'>Разом</h4>
                <p className='basket-with-goods-row'>Товари:<span> {totalGoods} шт</span></p>
                <p className='basket-with-goods-row'>Сума:<span>  {formattedPrice(totalQuantityOfGoods)} грн</span></p>
            </div>
            <div className="basket-total-right-column">
                <button className='basket-total-button aside-filter-button'>Підтверджую</button>
            </div>

        </div>
    )
}

export default React.memo(BasketTotalRow);
