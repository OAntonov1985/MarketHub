import React from 'react';
import formattedPrice from '../HelperFunctions/FormattedPrice';
import { useSelector } from 'react-redux';

function BasketTotalRow() {
    const { quantityOfGoods } = useSelector((state) => state.user);
    const { totalPriseInAllBasket } = useSelector((state) => state.user);
    return (
        <div className='basket-total-row'>
            <div className="basket-total-left-column">
                <h4 className='basket-with-goods-title modify-title'>Разом</h4>
                <p className='basket-with-goods-row'>Товари:<span> {quantityOfGoods} шт</span></p>
                <p className='basket-with-goods-row'>Сума:<span>  {formattedPrice(totalPriseInAllBasket)} грн</span></p>
            </div>
            <div className="basket-total-right-column">
                <button className='basket-total-button aside-filter-button'>Підтверджую</button>
            </div>

        </div>
    )
}

export default React.memo(BasketTotalRow);
