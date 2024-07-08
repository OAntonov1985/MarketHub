import React from 'react';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import formattedPrice from '../HelperFunctions/FormattedPrice';
import GetUsersOrders from '@/pages/api/GetUsersOrders';
import Cookies from 'js-cookie';
import PageIndexserSmall from './PageIndexserSmall';
import ArrowComponent from './ArrowComponent';
import SetOrderStatus from '@/pages/api/SetOrderStatus';
import { useDispatch } from 'react-redux';
import { setActiveSpinner } from '@/slices/userSlice';
import Spinner from '../Spinner/Spinner';

function RightColumnOrders() {
    const [userGoodsToSale, setUserGoodsToSale] = useState([]);
    const [totalUserGoodsToSale, setTotalUserGoodsToSale] = useState(0);
    const [activePage, setActivePage] = useState(1);
    const dispatch = useDispatch();

    const userID = parseInt(Cookies.get('userID'));

    useEffect(() => {
        dispatch(setActiveSpinner(true));
        const fetchOrders = async () => {
            try {
                const res = await GetUsersOrders(userID, activePage - 1);
                setUserGoodsToSale(res.result.orders);
                setTotalUserGoodsToSale(res.result.total)
                // console.log(res.result.orders);
            } catch (error) {
                console.error('Error fetching user orders:', error);
            }
            dispatch(setActiveSpinner(false));
        };
        fetchOrders();
    }, [])


    async function changeOrderStatus(e) {
        dispatch(setActiveSpinner(true));
        try {

            const result = await SetOrderStatus(userID, +e.target.id, e.target.value);
            dispatch(setActiveSpinner(false));
            alert(result.result.message);
        } catch (error) {
            alert(error);
        }
        dispatch(setActiveSpinner(false));
    }

    return (
        <div className='right-culumn-user-list-to-render-container'>
            {userGoodsToSale && userGoodsToSale.length == 0 ?
                <ArrowComponent title={"У вас ще нічого не придбали"} />
                :
                <div className="grid-container-users-goods container-in-orders">
                    <div className='user-good-title grid-item item-in-orders'>Номер замовлення <br /> і дата</div>
                    <div className='user-good-id grid-item item-in-orders'>Товари</div>
                    <div className='user-good-description grid-item item-in-orders'>Дані покупця</div>
                    <div className='user-good-price grid-item item-in-orders'>Вартість змовлення</div>
                    <div className='user-good-selector grid-item item-in-orders'>Статус замовлення</div>
                    {userGoodsToSale && userGoodsToSale.map((item, index) => {
                        const isEvenRow = index % 2 !== 0;

                        return (
                            <React.Fragment key={index}>
                                <div className={`user-good-id grid-item item-in-orders bodrers-3 flex-center ${isEvenRow ? 'even-row' : ''}`}>
                                    <div style={{ marginBottom: '6px' }}>{item.orderNum}</div>
                                    <div>{item.orderTime}</div>
                                </div>
                                <div className={`order-info-goods grid-item flex-in-orders  bodrers-2 ${isEvenRow ? 'even-row' : ''}`}>
                                    {item.userBuyingGoods.map((item, index) => (
                                        <div className="modify" key={index}>
                                            <div className='order-info-goods item-in-orders'>
                                                <Link
                                                    href={`#`}
                                                    className='good-photo photo-in-orders'>
                                                    <Image
                                                        alt="image of good"
                                                        src={item.thumbnail ? item.thumbnail : "/defaultPhoto.png"}
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
                                                    href={`#`}
                                                    className='good-title order-title'>{item.title.split(' ').slice(0, 3).join(' ')}
                                                </Link><br />

                                            </div>
                                            {/* <div style={{ marginLeft: 70 }}>Кількість: {item.number}</div>
                                        <div style={{ marginLeft: 70 }}>Вартість: {formattedPrice(item.price) + "грн"}</div> */}
                                        </div>

                                    ))}
                                </div>
                                <div className={`user-good-description grid-item item-in-orders  bodrers-2 flex-center ${isEvenRow ? 'even-row' : ''}`}>
                                    <div style={{ marginBottom: '6px' }}>{item.userInfo.clientSurName + " "}
                                        {item.userInfo.clientName}</div>
                                    <div>+{item.userInfo.clientPfone}</div>
                                    <div>{item.userAdress.deliveryCity}</div>
                                    <div>{`Відділення № ${item.userAdress.deliveryPost}`}</div>
                                </div>
                                <div className={`order-info-amount grid-item item-in-orders bodrers-2 flex-center ${isEvenRow ? 'even-row' : ''}`}>
                                    {item.userBuyingGoods && (
                                        formattedPrice(
                                            item.userBuyingGoods.reduce((total, item) => total + item.totalPrice, 0)
                                        )
                                    )} грн
                                </div>
                                <div className={`grid-item item-in-orders  bodrers--3 flex-center ${isEvenRow ? 'even-row' : ''}`}>
                                    <select className={`selector-in-orders ${isEvenRow ? 'even-row' : ''}`}
                                        id={item.orderNum}
                                        name={item.userBuyingGoods[0].id}
                                        onChange={(e) => changeOrderStatus(e)} >
                                        <option className={"options-in-odreds"} value="Нове замовлення" defaultValue={item.orderStatus}>{item.orderStatus == "newOrder" ? "Нове замовлення" : item.orderStatus}</option>
                                        <option className={"options-in-odreds"} value="В обробці" >В обробці</option>
                                        <option className={"options-in-odreds"} value="Відправлене" >Відправлене</option>
                                        <option className={"options-in-odreds"} value="Успішне" >Успішне</option>
                                        <option className={"options-in-odreds"} value="Неуспішне">Неуспішне</option>
                                    </select>
                                </div>
                            </React.Fragment>
                        );
                    })}

                </div>
            }
            {
                totalUserGoodsToSale < 6 ? null :
                    < PageIndexserSmall total={totalUserGoodsToSale} setActivePage={setActivePage} activePage={activePage} />
            }
        </div >
    )
}

export default React.memo(RightColumnOrders);