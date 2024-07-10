import ArrowComponent from './ArrowComponent';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import Image from 'next/image';
import formattedPrice from '../HelperFunctions/FormattedPrice';


export default function OrdersListFlex({ userGoodsToSale }) {
    const { activeSubItemInOrder } = useSelector((state) => state.user);
    return (
        <div className={`right-culumn-user-orders-container goods-list-flex `}>
            <ArrowComponent title={activeSubItemInOrder} />
            <ul className='orders-list-flex'>
                {userGoodsToSale.map((item, index) => (
                    console.log(item),
                    <li className='order-item-in-userpage flex-position' key={index}>
                        <div className='order-top-row'>
                            <div className='orders-top-row-left-part'>№ {item.orderNum}</div>
                            <div className='orders-top-row-right-part'>{item.orderTime}
                                <div> <div className='order-info-points'>
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
                                    </div></div>

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
                            <div className='total-price-info'>{item.orderStatus}
                                {/* <div>Всього:</div>
                                <div>
                                    {item.userBuyingGoods && (
                                        formattedPrice(
                                            item.userBuyingGoods.reduce((total, item) => total + item.totalPrice, 0)
                                        )
                                    )} грн
                                </div> */}

                            </div>
                        </div>


                    </li>
                )
                )}
            </ul>
        </div>
    )
}

