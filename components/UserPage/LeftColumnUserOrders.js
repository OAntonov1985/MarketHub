import React from 'react';

function LeftColumnUserOrders({ isActiveCategorie, setActiveItem }) {


    return (
        <div className={`left-column-item ${isActiveCategorie === "Покупки" ? "active-color" : ""}`} id="Покупки"
            onClick={(event) => setActiveItem(event.target.id)}
        >Покупки</div>
    )
}

export default React.memo(LeftColumnUserOrders);