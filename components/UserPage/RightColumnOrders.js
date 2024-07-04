import React from 'react';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import formattedPrice from '../HelperFunctions/FormattedPrice';
import GetUsersOrders from '@/pages/api/GetUsersOrders';
import Cookies from 'js-cookie';

function RightColumnOrders() {
    const [userGoodsToSale, setUserGoodsToSale] = useState([]);
    const [firstOptionShown, setFirstOptionShown] = useState(false);

    const userID = parseInt(Cookies.get('userID'));


    const handleSelectChange = (e) => {
        console.log(e.target.value);
        if (!firstOptionShown) {
            setFirstOptionShown(true);
        }
    };

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const res = await GetUsersOrders(1004);
                setUserGoodsToSale(res.result)
                console.log(res.result);
            } catch (error) {
                console.error('Error fetching user orders:', error);
            }
        };

        fetchOrders();
    }, [])

    return (
        <div className='right-culumn-user-list-to-render-container'>
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
                                    <div className='order-info-goods item-in-orders' key={index}>
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
                                        </Link>
                                    </div>
                                ))}
                            </div>
                            <div className={`user-good-description grid-item item-in-orders  bodrers-2 flex-center ${isEvenRow ? 'even-row' : ''}`}>
                                <div style={{ marginBottom: '6px' }}>{item.userInfo.clientSurName + " "}
                                    {item.userInfo.clientName}</div>
                                <div>+{item.userInfo.clientPfone}</div>
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
                                    id={item.userBuyingGoods[0].id}
                                    name={item.userBuyingGoods[0].id}
                                    onChange={handleSelectChange} >
                                    {!firstOptionShown && (
                                        <option className="options-in-orders" value="newOrder" selected>Нове замовлення</option>
                                    )}
                                    <option className={"options-in-odreds"} value="inProgress" >В обробці</option>
                                    <option className={"options-in-odreds"} value="inDelivery" >Відправлене</option>
                                    <option className={"options-in-odreds"} value="successfulOrder" >Успішне</option>
                                    <option className={"options-in-odreds"} value="unsuccessfulOrder">Неуспішне</option>
                                </select>
                            </div>
                        </React.Fragment>
                    );
                })}

            </div>
            {/* < GoodsListFlex userGoodsToSale={userGoodsToSale} activeItem={activeItem} setActiveItem={setActiveItem} deleteGood={deleteGood} changeGoodAvability={changeGoodAvability} />
                {totalUserGoodsToSale < 6 ? null :
                    < PageIndexserSmall total={totalUserGoodsToSale} setActivePage={setActivePage} activePage={activePage} />
                } */}
        </div>
    )
}

export default React.memo(RightColumnOrders);