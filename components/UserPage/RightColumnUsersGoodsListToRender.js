import React from 'react';
import { useState, useEffect } from 'react';
import PageIndexserSmall from './PageIndexserSmall';
import Link from 'next/link';
import Image from 'next/image';
import formattedPrice from '../HelperFunctions/FormattedPrice';
import { useDispatch } from 'react-redux';
import { setActiveSubItemInGood, setGoodToEdit } from '@/slices/userSlice';
import GoodsListFlex from './GoodsListFlex';
import ArrowComponent from './ArrowComponent';


function RightColumnUsersGoodsListToRender({ objectToSend }) {
    const { userGoodsToSale, totalUserGoodsToSale, setActivePage, activePage, setActiveItem, activeItem, changeGoodAvability, deleteGood } = objectToSend;
    console.log(userGoodsToSale.length)
    const [src, setSrs] = useState("/defaultPhoto.png")

    const dispatch = useDispatch();

    const toggleEditMenu = (itemId) => {
        const editMenu = document.getElementById(itemId);
        if (editMenu) {
            editMenu.classList.toggle('show-edit-menu');
        }
        setActiveItem(itemId === activeItem ? null : itemId);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            const isEditMenuClicked = event.target.classList.contains('order-info-points-container');

            if (!isEditMenuClicked) {
                const editMenus = document.querySelectorAll('.show-edit-menu');
                editMenus.forEach(menu => menu.classList.remove('show-edit-menu'));
            }
        };

        window.addEventListener('click', handleClickOutside);

        return () => {
            window.removeEventListener('click', handleClickOutside);
        };
    }, []);


    function pushToEditGood(event) {
        dispatch(setActiveSubItemInGood("Додати товар"));
        dispatch(setGoodToEdit(event.target.id));
    };


    return (
        <>{userGoodsToSale.length == 0 ?
            <ArrowComponent title={"Ви ще не додали жодного товару для продажу"} />
            :
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
                                        <div
                                            id={item.id}
                                            onClick={(event) => changeGoodAvability(event, item.available)}>
                                            {item.available === true ? "Деактивувати" : "Активувати"}
                                        </div>
                                        <div
                                            id={item.id}
                                            onClick={(event) => pushToEditGood(event)}>
                                            Редагувати</div>
                                        <div
                                            id={item.id}
                                            onClick={(event) => deleteGood(event, item.title)}
                                        >Видалити</div>
                                    </div>
                                </div>
                            </React.Fragment>
                        );
                    })}
                </div>
                < GoodsListFlex userGoodsToSale={userGoodsToSale} activeItem={activeItem} setActiveItem={setActiveItem} deleteGood={deleteGood} changeGoodAvability={changeGoodAvability} />
                {totalUserGoodsToSale < 6 ? null :
                    < PageIndexserSmall total={totalUserGoodsToSale} setActivePage={setActivePage} activePage={activePage} />
                }
            </div>
        }</>

    )
}

export default React.memo(RightColumnUsersGoodsListToRender);