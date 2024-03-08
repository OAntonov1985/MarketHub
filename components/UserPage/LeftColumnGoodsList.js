import React from 'react';
import Image from 'next/image';
import { useState } from 'react';

function LeftColumnGoodsList({ objToSend }) {
    const { isOpenOrders, setIsOpenOrders, setIsOpenGoods, isOpenGoods, setIsActiveCatogorie, setActiveItem } = objToSend;
    const [activeItemGoods, setActiveItemGoods] = useState("Всі товари");
    return (
        <div className='left-column-item'>
            <div className='userPage-left-column-goods' id="Товари"
                onClick={(event) => { setIsOpenGoods(!isOpenGoods), setIsOpenOrders(isOpenOrders ? isOpenOrders : !isOpenOrders); setIsActiveCatogorie(""); setActiveItem(event) }}>
                Товари
                <div className={`left-column-item-image-container ${isOpenGoods ? "" : "image-container-transform"}`}>
                    <Image
                        alt="image of good"
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
            <ul className={isOpenGoods ? 'left-column-goods-list' : 'left-column-goods-list list-open-goods'}>
                <li className={`left-column-goods-li ${activeItemGoods === "Всі товари" ? "active-color" : ""}`} id="Всі товари"
                    onClick={(event) => setActiveItemGoods(event.target.id)}>
                    <div className='goods-li-image-container'>
                        <Image
                            alt="icon of cirkle"
                            src={activeItemGoods === "Всі товари" ? "circle_check.svg" : "/checkmark-circle-outline.svg"}
                            quality={100}
                            fill
                            sizes="(max-width: 100%)"
                            style={{
                                objectFit: 'contain',
                                width: '100%'
                            }}
                        />
                    </div>
                    Всі товари</li>
                <li className={`left-column-goods-li ${activeItemGoods === "Активні товари" ? "active-color" : ""}`} id="Активні товари" onClick={(event) => setActiveItemGoods(event.target.id)}>
                    <div className='goods-li-image-container'>
                        <Image
                            alt="icon of cirkle"
                            src={activeItemGoods === "Активні товари" ? "circle_check.svg" : "/checkmark-circle-outline.svg"}
                            quality={100}
                            fill
                            sizes="(max-width: 100%)"
                            style={{
                                objectFit: 'contain',
                                width: '100%'
                            }}
                        />
                    </div>
                    Активні товари</li>
                <li className={`left-column-goods-li ${activeItemGoods === "Неактивні товари" ? "active-color" : ""}`} id="Неактивні товари" onClick={(event) => setActiveItemGoods(event.target.id)}>
                    <div className='goods-li-image-container'>
                        <Image
                            alt="icon of cirkle"
                            src={activeItemGoods === "Неактивні товари" ? "circle_check.svg" : "/checkmark-circle-outline.svg"}
                            quality={100}
                            fill
                            sizes="(max-width: 100%)"
                            style={{
                                objectFit: 'contain',
                                width: '100%'
                            }}
                        />
                    </div>
                    Неактивні товари</li>
                <li className={`left-column-goods-li ${activeItemGoods === "Додати товар" ? "active-color" : ""}`} id="Додати товар" onClick={(event) => setActiveItemGoods(event.target.id)}>
                    <div className='goods-li-image-container'>
                        <Image
                            alt="icon of cirkle"
                            src={activeItemGoods === "Додати товар" ? "/crossaddordergreen.svg" : "/crossaddorder.svg"}
                            quality={100}
                            fill
                            sizes="(max-width: 100%)"
                            style={{
                                objectFit: 'contain',
                                width: '100%'
                            }}
                        />
                    </div>
                    Додати товар</li>
            </ul>
        </div>
    )
}

export default React.memo(LeftColumnGoodsList);
