import React from 'react';

function RightColumnGoodsList() {
    return (
        <>
            <form className="add-new-good">
                <label htmlFor="product-name"
                    className="product-name-title">
                    Назва товару</label>
                <input name="product-name" id="product-name"
                    className="product-name-form-input"
                    // disabled={!isActiveFields}
                    // onChange={(e) => setUserName(e.target.value)}
                    placeholder="Введіть назву товару"
                // value={userName} 
                />

                <label htmlFor="product-price"
                    className="product-price-title">
                    Ціна товару</label>
                <input name="product-price" id="product-price"
                    className="product-price-form-input"
                    type='number'
                    // disabled={!isActiveFields}
                    // onChange={(e) => setUserSurname(e.target.value)}
                    placeholder="Введіть ціну товару"
                // value={userSurname} 
                />
            </form>
        </>
    )
}

export default React.memo(RightColumnGoodsList);