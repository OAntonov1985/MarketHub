import ArrowComponent from './ArrowComponent';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import { setActiveSpinner } from '@/slices/userSlice';
import Link from 'next/link';
import Image from 'next/image';
import formattedPrice from '../HelperFunctions/FormattedPrice';
import SetOrderStatus from '@/pages/api/SetOrderStatus';


export default function OrdersListFlex({ userGoodsToSale, activeItem, setActiveItem }) {
    const { activeSubItemInOrder } = useSelector((state) => state.user);
    const userID = parseInt(Cookies.get('userID'));
    const dispatch = useDispatch();

    async function ChangeOrderStatus(event) {
        // console.log(event.target.id);
        // console.log(activeItem)
        // console.log(userID)
        // console.log(event.target.id)

        dispatch(setActiveSpinner(true));

        try {
            const result = await SetOrderStatus(userID, activeItem, event.target.id);
            dispatch(setActiveSpinner(false));
            alert(result.result.message);
        } catch (error) {
            alert(error);
        }
        dispatch(setActiveSpinner(false));
        setActiveItem(null);
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            const isActiveMenu = event.target.closest('.t-container');

            if (!isActiveMenu) {
                setActiveItem(null);
            }
        };

        window.addEventListener('click', handleClickOutside);

        return () => {
            window.removeEventListener('click', handleClickOutside);
        };
    }, []);


    return (
        <div className={`right-culumn-user-orders-container goods-list-flex `}>
            <ArrowComponent title={activeSubItemInOrder} />
            <ul className='orders-list-flex'>
                {userGoodsToSale.map((item, index) => (
                    <li className='order-item-in-userpage flex-position' key={index}>
                        <div className='order-top-row'>
                            <div className='orders-top-row-left-part'>№ {item.orderNum}</div>
                            <div className='orders-top-row-right-part'>{item.orderTime}
                                <div className='t-container' id={item.orderNum}
                                    onClick={(event) => activeItem ? setActiveItem(null) : setActiveItem(+event.currentTarget.id)}>
                                    <div className='order-info-points'>
                                        <Image
                                            className='logo-of-point'
                                            alt="logo of point"
                                            src="/point.svg"
                                            quality={100}
                                            fill
                                            sizes="(max-width: 100%)"
                                            style={{
                                                objectFit: 'contain',
                                                width: '100%'
                                            }}
                                        />
                                    </div>
                                    <div className='order-info-points'>
                                        <Image
                                            className='logo-of-point'
                                            alt="logo of point"
                                            src="/point.svg"
                                            quality={100}
                                            fill
                                            sizes="(max-width: 100%)"
                                            style={{
                                                objectFit: 'contain',
                                                width: '100%'
                                            }}
                                        />
                                    </div>
                                    <div className='order-info-points'>
                                        <Image
                                            className='logo-of-point'
                                            alt="logo of point"
                                            src="/point.svg"
                                            quality={100}
                                            fill
                                            sizes="(max-width: 100%)"
                                            style={{
                                                objectFit: 'contain',
                                                width: '100%'
                                            }}
                                        />
                                    </div>
                                    <div className={`edit-menu menu-in-orders ${activeItem === item.orderNum ? "show-edit-menu" : ""}`} id={item.orderNum}>
                                        <div id={"В обробці"} onClick={(event) => ChangeOrderStatus(event)}>В обробці</div>
                                        <div id={"Відправлене"} onClick={(event) => ChangeOrderStatus(event)}>Відправлене</div>
                                        <div id={"Успішне"} onClick={(event) => ChangeOrderStatus(event)}>Успішне</div>
                                        <div id={"Неуспішне"} onClick={(event) => ChangeOrderStatus(event)}>Неуспішне</div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='order-central-row'>
                            <div className='user-info-in-order-left-part'>
                                {item.userBuyingGoods.map((item, index) => (
                                    <div className="modify1" key={index}>
                                        <div className='order-info-goods mod34'>
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
                                            <div className='price-info'>
                                                <div className='good-title order-title'>{item.title.split(' ').slice(0, 3).join(' ')}</div>
                                                <div style={{ display: 'flex' }}>
                                                    <div>{item.number}&nbsp;</div>x<div>&nbsp;{formattedPrice(item.price)} грн</div>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className='user-info-in-order-part'>
                                <div style={{ marginBottom: '6px' }}>{item.userInfo.clientSurName + " "}
                                    {item.userInfo.clientName}</div>
                                <div>{item.userAdress.deliveryCity}</div>
                                <div>{`Відділення № ${item.userAdress.deliveryPost}`}</div>
                                <div>+{item.userInfo.clientPfone}</div>

                            </div>
                            <div className='total-price-info'>{item.orderStatus == "newOrder" ? "Нове замовлення" : item.orderStatus}

                            </div>
                        </div>


                    </li>
                )
                )}
            </ul>
        </div>
    )
}

