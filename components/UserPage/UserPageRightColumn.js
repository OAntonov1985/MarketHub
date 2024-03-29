import React from 'react';
import RightColumnUserInfo from './RightColumnUserInfo';
import RightColumnOrders from './RightColumnOrders';
import RightColumnGoodsList from './RightColumnGoodsList';
import RightColumnUserOrders from './RightColumnUserOrders';
import { useSelector } from 'react-redux';

function UserPageRightColumn() {
    const { categoryToRender } = useSelector((state) => state.user);

    return (
        <div className='userPage-right-column'>
            {categoryToRender === "Особисті дані" ? <RightColumnUserInfo /> : null}
            {categoryToRender === "Товари" ? <RightColumnGoodsList /> : null}
            {categoryToRender === "Замволення" ? <RightColumnOrders /> : null}
            {categoryToRender === "Покупки" ? <RightColumnUserOrders /> : null}
        </div>
    )
}

export default React.memo(UserPageRightColumn);