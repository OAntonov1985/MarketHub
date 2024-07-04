import Link from 'next/link';
import Image from 'next/image';
import formattedPrice from '../HelperFunctions/FormattedPrice';

export default function OrderListFlex({ userPurchases }) {

    return (
        <ul className='orders-list-flex'>
            {userPurchases.map((item, index) => (
                <li className='order-item-in-userpage' key={index}>
                    <div className='order-left-column'>
                        <div className='order-left-column-order-number'>№{item.order_number}</div>
                        <div className='order-left-column-order-img-container'>
                            <Link
                                href={`/${item.category_details.name}/${item.sub_category_detail.name}/${item.good_id}`}
                                className='good-photo-inuserpage'>
                                <Image
                                    alt="image of good"
                                    src={item.order_goods_pfoto ? item.order_goods_pfoto : "/defaultPhoto.png"}
                                    quality={100}
                                    fill
                                    style={{
                                        objectFit: 'contain'
                                    }}
                                />
                            </Link>
                        </div>
                    </div>
                    <div className='order-central-column'>
                        <div className='order-central-column-good-title'>Назва товару:</div>
                        <div className='order-central-column-good-name'>
                            {item.order_goods_title.length > 20 ? item.order_goods_title.slice(0, 20) + "..." : item.order_goods_title}
                        </div>
                        <div className='order-central-column-user-info'>
                            <div>Покупець:&nbsp;</div>
                            <div> {item.order_client_info.name} {item.order_client_info.surname}</div>
                        </div>

                        <div> {formattedPrice(item.order_total_price)}  грн</div>
                    </div>
                    <div className='order-right-column'>
                        <div className='order-right-column-up-string'>{item.orderTime ? item.orderTime : "18.02.2024"}

                        </div>
                        <div>Обробляється</div>
                    </div>
                </li>
            ))}
        </ul>
    )
}