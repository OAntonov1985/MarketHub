import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setActiveSubItemInOrders, setRenderInfo } from '@/slices/userSlice';


function LeftColumnOrdersList({ objToSend }) {
    const dispatch = useDispatch();
    const { setIsActiveCatogorie, setActiveItem, isActiveCategorie } = objToSend;
    const { activeSubItemInOrder } = useSelector((state) => state.user);

    function SelectorToRenderInfo(event) {
        if (window.matchMedia('(max-width: 660px)').matches) {
            dispatch(setRenderInfo("userOrdersList"));
            setActiveItem(event.target.id);
        } else setActiveItem(event.target.id)
    }

    const handleCategorieClick = () => {
        if (isActiveCategorie === "Замволення") {
            setIsActiveCatogorie("Особисті дані");
            setActiveItem("Особисті дані");
        } else if (isActiveCategorie !== "Замволення") {
            setIsActiveCatogorie("Замволення");
            setActiveItem("Замволення");
        }
    };

    return (
        <div className='left-column-item' >
            <div className='userPage-left-column-orders'
                id="Замволення"
                onClick={(event) => handleCategorieClick(event)}
            >
                Замовлення
                <div className={`left-column-item-image-container ${isActiveCategorie === "Замволення" ? "image-container-transform" : ""}`} id="Замволення"
                    onClick={() => handleCategorieClick()}>
                    <Image
                        alt="icon of cirkle"
                        src="/useritem.svg"
                        quality={100}
                        fill
                        sizes="(max-width: 100%)"
                        style={{
                            objectFit: 'contain',
                            width: '100%'
                        }}
                    />
                </div>
            </div>
            <ul className={`left-column-orders-list ${isActiveCategorie === "Замволення" ? 'list-open-orders' : ''}`}>
                <li className={`left-column-orders-li ${activeSubItemInOrder === "Всі замовлення" ? "active-color" : ""}`} id="Всі замовлення"
                    onClick={(event) => { dispatch(setActiveSubItemInOrders(event.target.id)); dispatch(setRenderInfo("userGoodsList")) }}
                >
                    <div className='orders-li-image-container'>
                        <Image
                            alt="icon of cirkle"
                            src={activeSubItemInOrder == "Всі замовлення" ? "circle_check.svg" : "/checkmark-circle-outline.svg"}
                            quality={100}
                            fill
                            sizes="(max-width: 100%)"
                            style={{
                                objectFit: 'contain',
                                width: '100%'
                            }}
                        />
                    </div>
                    Всі замовлення</li>
                <li className={`left-column-orders-li ${activeSubItemInOrder === "Нові" ? "active-color" : ""}`} id="Нові"
                    onClick={(event) => { dispatch(setActiveSubItemInOrders(event.target.id)); dispatch(setRenderInfo("userGoodsList")) }}>
                    <div className='orders-li-image-container'>
                        <Image
                            alt="icon of cirkle"
                            src={activeSubItemInOrder === "Нові" ? "circle_check.svg" : "/checkmark-circle-outline.svg"}
                            quality={100}
                            fill
                            sizes="(max-width: 100%)"
                            style={{
                                objectFit: 'contain',
                                width: '100%'
                            }}
                        />
                    </div>
                    Нові</li>
                <li className={`left-column-orders-li ${activeSubItemInOrder === "В обробці" ? "active-color" : ""}`} id="В обробці"
                    onClick={(event) => { dispatch(setActiveSubItemInOrders(event.target.id)); dispatch(setRenderInfo("userGoodsList")) }}>
                    <div className='orders-li-image-container'>
                        <Image
                            alt="icon of cirkle"
                            src={activeSubItemInOrder === "В обробці" ? "circle_check.svg" : "/checkmark-circle-outline.svg"}
                            quality={100}
                            fill
                            sizes="(max-width: 100%)"
                            style={{
                                objectFit: 'contain',
                                width: '100%'
                            }}
                        />
                    </div>
                    В обробці</li>
                <li className={`left-column-orders-li ${activeSubItemInOrder === "Доставляються" ? "active-color" : ""}`} id="Доставляються"
                    onClick={(event) => { dispatch(setActiveSubItemInOrders(event.target.id)); dispatch(setRenderInfo("userGoodsList")) }}>
                    <div className='orders-li-image-container'>
                        <Image
                            alt="icon of cirkle"
                            src={activeSubItemInOrder === "Доставляються" ? "circle_check.svg" : "/checkmark-circle-outline.svg"}
                            quality={100}
                            fill
                            sizes="(max-width: 100%)"
                            style={{
                                objectFit: 'contain',
                                width: '100%'
                            }}
                        />
                    </div>
                    Доставляються</li>
                <li className={`left-column-orders-li ${activeSubItemInOrder === "Успішні" ? "active-color" : ""}`} id="Успішні"
                    onClick={(event) => { dispatch(setActiveSubItemInOrders(event.target.id)); dispatch(setRenderInfo("userGoodsList")) }}>
                    <div className='orders-li-image-container'>
                        <Image
                            alt="icon of cirkle"
                            src={activeSubItemInOrder === "Успішні" ? "circle_check.svg" : "/checkmark-circle-outline.svg"}
                            quality={100}
                            fill
                            sizes="(max-width: 100%)"
                            style={{
                                objectFit: 'contain',
                                width: '100%'
                            }}
                        />
                    </div>
                    Успішні</li>
                <li className={`left-column-orders-li ${activeSubItemInOrder === "Неуспішні" ? "active-color" : ""}`} id="Неуспішні"
                    onClick={(event) => { dispatch(setActiveSubItemInOrders(event.target.id)); dispatch(setRenderInfo("userGoodsList")) }}>
                    <div className='orders-li-image-container'>
                        <Image
                            alt="icon of cirkle"
                            src={activeSubItemInOrder === "Неуспішні" ? "circle_check.svg" : "/checkmark-circle-outline.svg"}
                            quality={100}
                            fill
                            sizes="(max-width: 100%)"
                            style={{
                                objectFit: 'contain',
                                width: '100%'
                            }}
                        />
                    </div>
                    Неуспішні</li>
            </ul>
        </div>
    )
}

export default React.memo(LeftColumnOrdersList);