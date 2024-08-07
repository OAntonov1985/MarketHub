import React from 'react';
import { useState } from 'react';
import formattedPrice from '../HelperFunctions/FormattedPrice';
import { useSelector } from 'react-redux';
import ModalWindowInBasket from './ModalWindow';
import CreateNewOrder from '@/pages/api/CreateNewOrder';
import { useDispatch } from 'react-redux';
import { setUserBasket } from '@/slices/userSlice';
import { useRouter } from 'next/navigation';

function BasketTotalRow({ clientPersonalInfo, clientAdressInfo }) {
    const { quantityOfGoods } = useSelector((state) => state.user);
    const { totalPriseInAllBasket } = useSelector((state) => state.user);
    const { userBasket } = useSelector((state) => state.user);

    const [isOpen, setIsOpen] = useState(false);


    async function newOrder() {
        const length = Object.keys(clientAdressInfo).length;
        if (length === 0) {
            alert("Введіть адресу отримувача.");
        } else {
            const sellerArray = [];
            userBasket.forEach(item => sellerArray.push(item.seller_id));
            const originSellers = Array.from(new Set(sellerArray));
            const today = new Date();
            const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
            const formattedDate = today.toLocaleDateString('uk-UA', options);
            const newOrder = {
                "userInfo": clientPersonalInfo,
                "userAdress": clientAdressInfo,
                "userBuyingGoods": userBasket,
                "sellersIDArray": originSellers,
                "orderTime": formattedDate,
                "orderStatus": 'Нове замовлення'

            };

            const { result } = await CreateNewOrder(newOrder);
            if (result) {
                setIsOpen(true);
            } else alert("При створенні замовлення виникла помилка. Зверніться до розробників!")
        }
    }

    return (
        <div className='basket-total-row'>
            <div className="basket-total-left-column">
                <h4 className='basket-with-goods-title modify-title'>Разом</h4>
                <p className='basket-with-goods-row'>Товари:<span> {quantityOfGoods} шт</span></p>
                <p className='basket-with-goods-row'>Сума:<span>  {formattedPrice(totalPriseInAllBasket)} грн</span></p>
            </div>
            <div className="basket-total-right-column">
                <button className='basket-total-button aside-filter-button' onClick={newOrder}>Підтверджую</button>
            </div>
            <ModalWindowInBasket setIsOpen={setIsOpen} isOpen={isOpen} />
        </div>
    );
};

export default React.memo(BasketTotalRow);
