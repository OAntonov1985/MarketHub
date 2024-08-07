import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setRenderInfo } from '@/slices/userSlice';



function LeftColumnUserInfo({ isActiveCategorie, setActiveItem }) {

    const { renderInfo } = useSelector((state) => state.user);
    const dispatch = useDispatch();


    function SelectorToRenderInfo(event) {
        if (window.matchMedia('(max-width: 660px)').matches) {
            dispatch(setRenderInfo("userInfo"));
            setActiveItem(event.target.id);
        } else setActiveItem(event.target.id)
    }

    return (
        <div className={`left-column-item ${isActiveCategorie === "Особисті дані" ? "active-color" : ""}`} id="Особисті дані"
            onClick={SelectorToRenderInfo}
        // onClick={(event) => setActiveItem(event.target.id)}
        >Особисті дані</div>
    )
}

export default React.memo(LeftColumnUserInfo);

