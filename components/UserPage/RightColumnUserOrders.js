import React, { useEffect, useState } from 'react';
import formattedPrice from '../HelperFunctions/FormattedPrice';
import Image from 'next/image';
import Link from 'next/link';
import PajeIndexserSmall from './PajeIndexserSmall';
import GetUserPurchases from '@/pages/api/GetUserPurchases';
import GoodCard from '../GoodCard/GoodCard';


function RightColumnUserOrders({ good, breadCrumpData }) {
    const [userPurchases, setUserPurchases] = useState([]);
    const [totalUserPurchases, setTotalUserPurchases] = useState(0);
    const [activePage, setActivePage] = useState(1);

    const fetchData = async () => {
        try {
            const result = await GetUserPurchases(1002, activePage - 1);
            setUserPurchases(result.result.data);
            // console.log(result.result.data)
            setTotalUserPurchases(result.result.total);
        } catch (error) {
            alert('Упс.... Щось пішло не так. зверніться до розробників');
        }
    };

    useEffect(() => {
        fetchData();
    }, [activePage]);

    return (
        <div className='right-culumn-user-orders-container'>
            <div className='right-culumn-user-orders-table'>
                <div className='right-culumn-user-orders-header'>
                    <div className='order-info-date'>Дата  та час</div>
                    <div className='order-info-goods'>Назва і фото товару</div>
                    <div className='order-info-buyer'>Дані про продавця</div>
                    <div className='order-info-amount'>Сума замовлення</div>
                    <div className='order-info-order-status'>Статус замовлення</div>
                </div>
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
                        <div className='right-culumn-user-orders-main' key={index}>
                            <div className='order-info-date'>
                                <div className='order-number'>{item.order_number}</div>
                                <div className='order-date'>{item.order_date}</div>
                            </div>
                            <div className='order-info-goods'>
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
                            <div className='order-info-buyer'>{item.order_client_info.name} {item.order_client_info.surname} {item.order_client_info.phone}</div>
                            <div className='order-info-amount'>{formattedPrice(item.order_total_price)} грн</div>
                            <div className={classList}>{item.order_status}</div>
                        </div>
                    );
                })}
            </div>
            <PajeIndexserSmall totalUserPurchases={totalUserPurchases} setActivePage={setActivePage} activePage={activePage} />
        </div>
    )
}

// export async function getServerSideProps(context) {
//     let id = context.query.id
//     // console.log(id)
//     const resGoods = await fetch(MaketHubURL + `goods/${id}`);
//     const good = await resGoods.json();

//     const breadCrumpData = {
//         category: good.category_details.name,
//         subcategory: good.sub_category_detail.name,
//         title: good.title,
//         id: good.id,
//         available: good.available
//     };

//     return {
//         props: {
//             good,
//             breadCrumpData
//         }
//     };
// };

export default React.memo(RightColumnUserOrders);





