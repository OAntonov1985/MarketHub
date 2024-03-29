import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveSubItemInGood } from '@/slices/userSlice';

function LeftColumnGoodsList({ objToSend }) {
    const { setIsActiveCatogorie, setActiveItem, isActiveCategorie } = objToSend;
    const dispatch = useDispatch();
    const { activeSubItemInGood } = useSelector((state) => state.user);

    return (
        <div className='left-column-item'>
            <div className='userPage-left-column-goods' id="Товари"
                onClick={(event) => { setIsActiveCatogorie(""); setActiveItem(event.target.id); }}>
                Товари
                <div className={`left-column-item-image-container ${isActiveCategorie === "Товари" ? "image-container-transform" : ""}`}>
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
            <ul className={`left-column-goods-list ${isActiveCategorie === "Товари" ? "list-open-goods" : ""}`}>
                <li className={`left-column-goods-li ${activeSubItemInGood === "Всі товари" ? "active-color" : ""}`} id="Всі товари"
                    onClick={(event) => dispatch(setActiveSubItemInGood(event.target.id))}>
                    <div className='goods-li-image-container'>
                        <Image
                            alt="icon of cirkle"
                            src={activeSubItemInGood === "Всі товари" ? "circle_check.svg" : "/checkmark-circle-outline.svg"}
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
                <li className={`left-column-goods-li ${activeSubItemInGood === "Активні товари" ? "active-color" : ""}`} id="Активні товари" onClick={(event) => dispatch(setActiveSubItemInGood(event.target.id))}>
                    <div className='goods-li-image-container'>
                        <Image
                            alt="icon of cirkle"
                            src={activeSubItemInGood === "Активні товари" ? "circle_check.svg" : "/checkmark-circle-outline.svg"}
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
                <li className={`left-column-goods-li ${activeSubItemInGood === "Неактивні товари" ? "active-color" : ""}`} id="Неактивні товари" onClick={(event) => dispatch(setActiveSubItemInGood(event.target.id))}>
                    <div className='goods-li-image-container'>
                        <Image
                            alt="icon of cirkle"
                            src={activeSubItemInGood === "Неактивні товари" ? "circle_check.svg" : "/checkmark-circle-outline.svg"}
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
                <li className={`left-column-goods-li ${activeSubItemInGood === "Додати товар" ? "active-color" : ""}`} id="Додати товар" onClick={(event) => dispatch(setActiveSubItemInGood(event.target.id))}>
                    <div className='goods-li-image-container'>
                        <Image
                            alt="icon of cirkle"
                            src={activeSubItemInGood === "Додати товар" ? "/crossaddordergreen.svg" : "/crossaddorder.svg"}
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
        </div >
    )
}

export default React.memo(LeftColumnGoodsList);
