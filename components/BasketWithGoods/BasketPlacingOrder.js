import React from 'react';
import BasketForm from './BasketForm';
import { useState } from 'react';
import Cookies from 'js-cookie';

function BasketPlacingOrder() {
    const [isNewUser, setIsNewUser] = useState("active-button");
    const [userInfo, setUserInfo] = useState([]);

    const newArr = Cookies.get('userName');
    console.log(newArr)

    const toggleUser = (e) => {
        if (e.target.id === "newСustomer") {
            setIsNewUser("active-button")
        }
        else if (e.target.id === "regularСustomer") {
            setIsNewUser("unactive-button")
        }
    }

    return (
        <div className='basket-placing-order'>
            <h4 className='basket-with-goods-title'>Оформлення замовлення</h4>
            <p className='basket-with-goods-subtitle'>Введіть Ваші контактні дані</p>
            <div className='basket-with-goods-buttons-row'>
                <button
                    id={"newСustomer"}
                    className={`basket-with-goods-new-customer ${isNewUser === "active-button" ? "active-button" : "unactive-button"} `}
                    onClick={toggleUser}
                >Я новий користувач</button>
                <button
                    id={"regularСustomer"}
                    className={`basket-with-goods-regular-customer ${isNewUser === "active-button" ? "unactive-button" : "active-button"}`}
                    onClick={toggleUser}
                >Я постійний клієнт</button>
            </div>
            <BasketForm />
        </div>
    )
}

export default React.memo(BasketPlacingOrder);