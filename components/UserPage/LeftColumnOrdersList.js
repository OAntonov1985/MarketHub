import React from 'react';
import Image from 'next/image';
import { useState } from 'react';


function LeftColumnOrdersList({ objToSend }) {
    const { isOpenOrders, setIsOpenOrders, setIsOpenGoods, isOpenGoods, setIsActiveCatogorie } = objToSend;
    const [activeItem, setActiveItem] = useState("Всі замовлення");

    return (
        <div className='left-column-item'>
            <div className='userPage-left-column-orders' onClick={() => { setIsOpenOrders(!isOpenOrders); setIsOpenGoods(isOpenGoods ? isOpenGoods : !isOpenGoods); setIsActiveCatogorie("") }}>
                Замовлення
                <div className='left-column-item-image-container'>
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
            <ul className={isOpenOrders ? 'left-column-orders-list' : 'left-column-orders-list list-open-orders'}>
                <li className={`left-column-orders-li ${activeItem === "Всі замовлення" ? "active-color" : ""}`} id="Всі замовлення"
                    onClick={(event) => setActiveItem(event.target.id)}
                >
                    <div className='orders-li-image-container'>
                        <Image
                            alt="icon of cirkle"
                            src={activeItem === "Всі замовлення" ? "circle_check.svg" : "/checkmark-circle-outline.svg"}
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
                <li className={`left-column-orders-li ${activeItem === "Нові" ? "active-color" : ""}`} id="Нові" onClick={(event) => setActiveItem(event.target.id)}>
                    <div className='orders-li-image-container'>
                        <Image
                            alt="icon of cirkle"
                            src={activeItem === "Нові" ? "circle_check.svg" : "/checkmark-circle-outline.svg"}
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
                <li className={`left-column-orders-li ${activeItem === "В обробці" ? "active-color" : ""}`} id="В обробці" onClick={(event) => setActiveItem(event.target.id)}>
                    <div className='orders-li-image-container'>
                        <Image
                            alt="icon of cirkle"
                            src={activeItem === "В обробці" ? "circle_check.svg" : "/checkmark-circle-outline.svg"}
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
                <li className={`left-column-orders-li ${activeItem === "Доставляються" ? "active-color" : ""}`} id="Доставляються" onClick={(event) => setActiveItem(event.target.id)}>
                    <div className='orders-li-image-container'>
                        <Image
                            alt="icon of cirkle"
                            src={activeItem === "Доставляються" ? "circle_check.svg" : "/checkmark-circle-outline.svg"}
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
                <li className={`left-column-orders-li ${activeItem === "Успішні" ? "active-color" : ""}`} id="Успішні" onClick={(event) => setActiveItem(event.target.id)}>
                    <div className='orders-li-image-container'>
                        <Image
                            alt="icon of cirkle"
                            src={activeItem === "Успішні" ? "circle_check.svg" : "/checkmark-circle-outline.svg"}
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
                <li className={`left-column-orders-li ${activeItem === "Неуспішні" ? "active-color" : ""}`} id="Неуспішні" onClick={(event) => setActiveItem(event.target.id)}>
                    <div className='orders-li-image-container'>
                        <Image
                            alt="icon of cirkle"
                            src={activeItem === "Неуспішні" ? "circle_check.svg" : "/checkmark-circle-outline.svg"}
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