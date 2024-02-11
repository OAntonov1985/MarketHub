import React from 'react';
import Image from 'next/image';
import { useState } from 'react';



function BasketDeliveryInfo() {
    const [cargoCarrier, setCargoCarier] = useState("nova");

    const changeCagroCarier = (event) => {
        setCargoCarier(event.target.id);
    }

    return (
        <div className='basket-with-good-container'>
            <h4 className='basket-with-goods-title'>Доставка</h4>
            <div className="basket-with-goods-content">
                <div className="basket-with-good-left-column">
                    <div
                        className={`basket-with-goods-item ${cargoCarrier === 'nova' ? "goods-item-active" : ''} `}
                        id="nova"
                        onClick={changeCagroCarier}>
                        <div className='good-item-title'>Нова пошта</div>
                        <div className='good-item-chekbox'>
                            <Image
                                alt="image of good"
                                src={cargoCarrier === 'nova' ? "/checkbox-outline-green.svg" : "/checkbox-outline.svg"}
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
                    <div
                        className={`basket-with-goods-item ${cargoCarrier === 'ukrposhta' ? "goods-item-active" : ''} `}
                        id="ukrposhta"
                        onClick={changeCagroCarier}>
                        <div className='good-item-title'>Укрпошта</div>
                        <div className='good-item-chekbox'>
                            <Image
                                alt="image of good"
                                src={cargoCarrier === 'ukrposhta' ? "/checkbox-outline-green.svg" : "/checkbox-outline.svg"}
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
                    <div
                        className={`basket-with-goods-item ${cargoCarrier === 'meest' ? "goods-item-active" : ''} `}
                        id="meest"
                        onClick={changeCagroCarier}>
                        <div className='good-item-title'>Міст Експрес</div>
                        <div className='good-item-chekbox'>
                            <Image
                                alt="image of good"
                                src={cargoCarrier === 'meest' ? "/checkbox-outline-green.svg" : "/checkbox-outline.svg"}
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
                </div>


                <div className="basket-with-good-right-column">
                    <label htmlFor="userCity"
                        className='basket-label-title'
                    >Місто</label>
                    <input
                        id="userCity"
                        type="text"
                        className="basket-input active-field"
                        placeholder="Введіть місто"
                    // onChange={handleChange}
                    // value={userEmail}
                    // onBlur={validateEmail}
                    // required 
                    />

                    <label htmlFor="userDepartment"
                        className='basket-label-title'
                    >Номер відділення</label>
                    <input
                        id="userDepartment"
                        type="text"
                        className="basket-input active-field"
                        placeholder="Введіть номер відділення"
                    // onChange={handleChange}
                    // value={userEmail}
                    // onBlur={validateEmail}
                    // required 
                    />
                </div>
            </div>

        </div>
    )
}

export default React.memo(BasketDeliveryInfo);