import React, { useEffect, useState } from 'react';
import formattedPrice from '../HelperFunctions/FormattedPrice';
import Image from 'next/image';
import Link from 'next/link';
import PageIndexserSmall from './PageIndexserSmall';
import GetUserPurchases from '@/pages/api/GetUserPurchases';
import { useDispatch } from 'react-redux';
import { setActiveSpinner } from '@/slices/userSlice';


function RightColumnUserOrders() {
    const [userPurchases, setUserPurchases] = useState([]);
    const [totalUserPurchases, setTotalUserPurchases] = useState(0);
    const [activePage, setActivePage] = useState(1);
    const dispatch = useDispatch();

    const fetchData = async () => {
        dispatch(setActiveSpinner(true));
        try {
            const result = await GetUserPurchases(1002, activePage - 1);
            setUserPurchases(result.result.data);
            setTotalUserPurchases(result.result.total);
            dispatch(setActiveSpinner(false));
        } catch (error) {
            alert('Упс.... Щось пішло не так. зверніться до розробників');
        }
    };

    useEffect(() => {
        fetchData();
    }, [activePage]);




    return (
        <div className='right-culumn-user-orders-container'>
            <div className="grid-container">
                <div className='order-info-date grid-item'>Дата  та час</div>
                <div className='order-info-goods grid-item'>Назва і фото товару</div>
                <div className='order-info-buyer grid-item'>Дані про продавця</div>
                <div className='order-info-amount grid-item'>Сума замовлення</div>
                <div className='order-info-order-status grid-item'>Статус замовлення</div>
                {userPurchases && userPurchases.map((item, index) => {
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
                        <React.Fragment key={index}>
                            <div className='order-info-date grid-item'>
                                <div className='order-number'>{item.order_number}</div>
                                <div className='order-date'>{item.order_date}</div>
                            </div>
                            <div className='order-info-goods grid-item'>
                                <Link
                                    href={`/${item.category_details.name}/${item.sub_category_detail.name}/${item.good_id}`}
                                    className='good-photo'>
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
                                </Link>
                                <Link
                                    href={`/${item.category_details.name}/${item.sub_category_detail.name}/${item.good_id}`}
                                    className='good-title order-title'>{item.order_goods_title.split(' ').slice(0, 3).join(' ')}
                                </Link>
                            </div>
                            <div className='order-info-buyer grid-item'>{item.order_client_info.name}<br /> {item.order_client_info.surname}<br /> {item.order_client_info.phone}</div>
                            <div className='order-info-amount grid-item'>{formattedPrice(item.order_total_price)} грн</div>
                            <div className={`grid-item order_status ${classList}`}>{item.order_status}
                                <div className='line'></div>
                            </div>
                        </React.Fragment>
                    );
                })}
            </div>
            <PageIndexserSmall total={totalUserPurchases} setActivePage={setActivePage} activePage={activePage} />
        </div>
    );

}

export default React.memo(RightColumnUserOrders);





