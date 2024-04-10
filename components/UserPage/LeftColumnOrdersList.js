import React from 'react';
import Image from 'next/image';
import { useState } from 'react';


function LeftColumnOrdersList({ objToSend }) {
    const { setIsActiveCatogorie, setActiveItem, isActiveCategorie } = objToSend;
    const [activeItemInOrders, setActiveItemInOrders] = useState("Всі замовлення");


    return (
        <div className='left-column-item' >
            <div className='userPage-left-column-orders' id="Замволення"
                onClick={(event) => {
                    setIsActiveCatogorie("");
                    setActiveItem(event.target.id);
                }}>
                Замовлення
                <div className={`left-column-item-image-container ${isActiveCategorie === "Замволення" ? "image-container-transform" : ""}`}>
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
                <li className={`left-column-orders-li ${activeItemInOrders === "Всі замовлення" ? "active-color" : ""}`} id="Всі замовлення"
                    onClick={(event) => setActiveItemInOrders(event.target.id)}
                >
                    <div className='orders-li-image-container'>
                        <Image
                            alt="icon of cirkle"
                            src={activeItemInOrders === "Всі замовлення" ? "circle_check.svg" : "/checkmark-circle-outline.svg"}
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
                <li className={`left-column-orders-li ${activeItemInOrders === "Нові" ? "active-color" : ""}`} id="Нові" onClick={(event) => setActiveItemInOrders(event.target.id)}>
                    <div className='orders-li-image-container'>
                        <Image
                            alt="icon of cirkle"
                            src={activeItemInOrders === "Нові" ? "circle_check.svg" : "/checkmark-circle-outline.svg"}
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
                <li className={`left-column-orders-li ${activeItemInOrders === "В обробці" ? "active-color" : ""}`} id="В обробці" onClick={(event) => setActiveItemInOrders(event.target.id)}>
                    <div className='orders-li-image-container'>
                        <Image
                            alt="icon of cirkle"
                            src={activeItemInOrders === "В обробці" ? "circle_check.svg" : "/checkmark-circle-outline.svg"}
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
                <li className={`left-column-orders-li ${activeItemInOrders === "Доставляються" ? "active-color" : ""}`} id="Доставляються" onClick={(event) => setActiveItemInOrders(event.target.id)}>
                    <div className='orders-li-image-container'>
                        <Image
                            alt="icon of cirkle"
                            src={activeItemInOrders === "Доставляються" ? "circle_check.svg" : "/checkmark-circle-outline.svg"}
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
                <li className={`left-column-orders-li ${activeItemInOrders === "Успішні" ? "active-color" : ""}`} id="Успішні" onClick={(event) => setActiveItemInOrders(event.target.id)}>
                    <div className='orders-li-image-container'>
                        <Image
                            alt="icon of cirkle"
                            src={activeItemInOrders === "Успішні" ? "circle_check.svg" : "/checkmark-circle-outline.svg"}
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
                <li className={`left-column-orders-li ${activeItemInOrders === "Неуспішні" ? "active-color" : ""}`} id="Неуспішні" onClick={(event) => setActiveItemInOrders(event.target.id)}>
                    <div className='orders-li-image-container'>
                        <Image
                            alt="icon of cirkle"
                            src={activeItemInOrders === "Неуспішні" ? "circle_check.svg" : "/checkmark-circle-outline.svg"}
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