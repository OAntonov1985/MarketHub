import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setRenderInfo } from '@/slices/userSlice';

function LeftColumnUserOrders({ isActiveCategorie, setActiveItem }) {
    const dispatch = useDispatch();

    function SelectorToRenderInfo(event) {
        if (window.matchMedia('(max-width: 660px)').matches) {
            dispatch(setRenderInfo("userPurchases"));
            setActiveItem(event.target.id);
        } else setActiveItem(event.target.id)
    }
    return (
        <div className={`left-column-item ${isActiveCategorie === "Покупки" ? "active-color" : ""}`} id="Покупки"
            onClick={SelectorToRenderInfo}
        >Покупки</div>
    )
}

export default React.memo(LeftColumnUserOrders);