import React from 'react';
import RightColumnUserInfo from './RightColumnUserInfo';
import RightColumnOrders from './RightColumnOrders';
import RightColumnGoodsList from './RightColumnGoodsList';
import RightColumnUserOrders from './RightColumnUserOrders';
import { useSelector } from 'react-redux';

function UserPageRightColumn() {
    const { categoryToRender } = useSelector((state) => state.user);
    const { renderInfo } = useSelector((state) => state.user);
    // console.log(categoryToRender)

    return (
        <div className={`userPage-right-column ${renderInfo == "userInfo" || renderInfo == "userGoodsList" || renderInfo == "userPurchases" ? "display-block" : "display-none-in-userpage"}`}>
            {categoryToRender === "Особисті дані" ? <RightColumnUserInfo /> : null}
            {categoryToRender === "Товари" ? <RightColumnGoodsList /> : null}
            {categoryToRender === "Замволення" ? <RightColumnOrders /> : null}
            {categoryToRender === "Покупки" ? <RightColumnUserOrders /> : null}
        </div>
    )
}

export default React.memo(UserPageRightColumn);