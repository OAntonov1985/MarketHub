import React from 'react';
import Cookies from 'js-cookie';

function LeftColumnUserInfo({ isActiveCategorie, setActiveItem }) {

    return (
        <div className={`left-column-item ${isActiveCategorie === "Особисті дані" ? "active-color" : ""}`} id="Особисті дані"
            onClick={(event) => setActiveItem(event)}
        >Особисті дані</div>
    )
}

export default React.memo(LeftColumnUserInfo);

