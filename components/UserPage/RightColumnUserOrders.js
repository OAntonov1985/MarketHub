import React, { useEffect, useState } from 'react';
import formattedPrice from '../HelperFunctions/FormattedPrice';
import Image from 'next/image';
import data from "../../data2.json";
import PajeIndexserSmall from './PajeIndexserSmall';


function RightColumnUserOrders() {
    const [userPurchases, setUserPurchases] = useState(data);


    useEffect(() => {
        console.log("start")
    }, [])

    return (
        <div className='right-culumn-user-orders-container'>
            <div className='right-culumn-user-orders-header'>
                <div className='order-info-date'>Дата  та час</div>
                <div className='order-info-goods'>Назва і фото товару</div>
                <div className='order-info-buyer'>Дані про продавця</div>
                <div className='order-info-amount'>Сума замовлення</div>
                <div className='order-info-order-status'>Статус замовлення</div>
            </div>
            {userPurchases.slice(0, 6).map((item, index) => {
                let classList = 'order-info-order-status';
                switch (item.order_status) {
                    case 'Доставлено':
                        classList += ' order-status-green';
                        break;
                    case 'Скасовано':
                        classList += ' order-status-red';
                        break;
                    case 'Нове замовлення':
                        classList += ' order-status-yellow';
                        break;
                    case 'В дорозі':
                        break;
                    default:
                        classList = 'order-info-order-status';
                }

                return (
                    <div className='right-culumn-user-orders-main' key={index}>
                        <div className='order-info-date'>
                            <div className='order-number'>{item.order_number}</div>
                            <div className='order-date'>{item.order_date}</div>
                        </div>
                        <div className='order-info-goods'>
                            <div className='good-photo'>
                                <Image
                                    alt="image of good"
                                    src={item.order_goods_pfoto}
                                    quality={100}
                                    fill
                                    sizes="(max-width: 100%)"
                                    style={{
                                        objectFit: 'contain',
                                        width: '100%'
                                    }}
                                />
                            </div>
                            <div className='good-title'>{item.order_goods_title.split(' ').slice(0, 3).join(' ')}</div>
                        </div>
                        <div className='order-info-buyer'>{item.order_client_info.name} {item.order_client_info.surname} {item.order_client_info.phone}</div>
                        <div className='order-info-amount'>{formattedPrice(item.order_total_price)} грн</div>
                        <div className={classList}>{item.order_status}</div>
                    </div>
                );
            })}
            <PajeIndexserSmall />
        </div>
    )
}

export default React.memo(RightColumnUserOrders);





