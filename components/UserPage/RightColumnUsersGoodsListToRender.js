import React from 'react';
import { useState } from 'react';
import PageIndexserSmall from './PageIndexserSmall';
import Link from 'next/link';
import Image from 'next/image';
import formattedPrice from '../HelperFunctions/FormattedPrice';
import { useDispatch } from 'react-redux';
import { setActiveSubItemInGood, setGoodToEdit } from '@/slices/userSlice';

function RightColumnUsersGoodsListToRender({ totalUserGoodsToSale, userGoodsToSale, activePage, setActivePage, activeItem, setActiveItem }) {

    const [isVisibleEditMenu, setIsVisibleEditMenu] = useState(false);
    const dispatch = useDispatch();


    const toggleEditMenu = (itemId) => {
        const editMenu = document.getElementById(itemId);

        if (editMenu) {
            editMenu.classList.toggle('show-edit-menu');
        }
        setActiveItem(itemId === activeItem ? null : itemId);
    };

    function pushToEditGood(event) {
        // console.log(event.target.id);
        dispatch(setActiveSubItemInGood("Додати товар"));
        dispatch(setGoodToEdit(event.target.id));
    }



    return (
        <div className='right-culumn-user-list-to-render-container'>
            <div className="grid-container-users-goods">
                <div className='user-good-title grid-item'>Назва товару</div>
                <div className='user-good-id grid-item'>Код товару</div>
                <div className='user-good-description grid-item'>Опис товару</div>
                <div className='user-good-price grid-item'>Ціна</div>
                <div className='user-good-selector grid-item'></div>
                {userGoodsToSale && userGoodsToSale.map((item, index) => {
                    return (
                        <React.Fragment key={index}>
                            <div className='order-info-goods grid-item' >
                                <Link
                                    href={`/${item.category_details.name}/${item.sub_category_detail.name}/${item.id}`}
                                    className='good-photo'>
                                    <Image
                                        alt="image of good"
                                        src={item.thumbnail}
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
                                    href={`/${item.category_details.name}/${item.sub_category_detail.name}/${item.id}`}
                                    className='good-title order-title'>{item.title.split(' ').slice(0, 3).join(' ')}
                                </Link>
                            </div>
                            <div>{item.id}</div>
                            <div className='user-good-description grid-item'>{item.description}</div>
                            <div className='order-info-amount grid-item'>{formattedPrice(item.price)} грн</div>
                            <div className='order-info-points-container' id={`${item.id} ${item.available}`} onClick={() => toggleEditMenu(item.id)}>
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
                                <div className={`edit-menu ${activeItem === item.id ? "show-edit-menu" : ""}`} id={item.id}>
                                    <div className={isVisibleEditMenu ? "visible" : "hidden"}>{item.available === true ? "Деактивувати" : "Активувати"}</div>
                                    <div className={isVisibleEditMenu ? "visible" : "hidden"} id={item.id} onClick={(event) => pushToEditGood(event)}>Редагувати</div>
                                    <div className={isVisibleEditMenu ? "visible" : "hidden"}>Видалити</div>
                                </div>
                            </div>
                        </React.Fragment>
                    );
                })}
            </div>
            <PageIndexserSmall total={totalUserGoodsToSale} setActivePage={setActivePage} activePage={activePage} />
        </div>
    )
}

export default React.memo(RightColumnUsersGoodsListToRender);