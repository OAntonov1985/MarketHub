import React from 'react';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import GetListDepartments from '@/pages/api/GetListDepartments';
import GetListCities from '@/pages/api/GetListCities';






function BasketDeliveryInfo({ setClientAdresslInfo }) {
    const [cargoCarrier, setCargoCarier] = useState("nova");
    const [isDisplaingSearchResult, setIsDisplaingSearchResult] = useState(false);

    const [cityData, setCityData] = useState([]);
    const [deliveryCity, setDeliveryCity] = useState("");

    const [dataPostOffice, setDataPostOffice] = useState([]);
    const [inpitValuedeliveryPostOffice, setInpitValuedeliveryPostOffice] = useState("");
    const [searchResultPostOffice, setSearchResultPostOffice] = useState([]);



    const changeCagroCarier = (event) => {
        setIsDisplaingSearchResult(false);
        setCityData([]);
        setDeliveryCity("");
        setCargoCarier(event.target.id);
        setDataPostOffice([]);
        setInpitValuedeliveryPostOffice("");
    };

    async function updateDeliveryCity(event) {
        const departamentID = event.target.id;
        setDeliveryCity(event.target.innerHTML);
        setCityData([]);
        setIsDisplaingSearchResult(false);

        const { dataDepartment } = await GetListDepartments(departamentID);
        if (dataDepartment.data.length > 0) {
            setDataPostOffice(dataDepartment.data);
        };
    }

    async function citySelection(event) {
        const cityName = event.target.value;
        setDeliveryCity(event.target.value);

        const { dataCities } = await GetListCities(cityName);

        if (dataCities.data[0].Addresses.length > 0) {
            setCityData(dataCities.data[0].Addresses);
            setIsDisplaingSearchResult(true);
        }

    };

    const departmentSelection = (event) => {
        setIsDisplaingSearchResult(true);
        setInpitValuedeliveryPostOffice(event.target.value);
        const searchQuery = event.target.value.toLowerCase();
        const searchResults = dataPostOffice.filter(item => item.Description.toLowerCase().includes(searchQuery));
        setSearchResultPostOffice(searchResults);
    }

    const updateDeliveryPostOffice = (event) => {
        setIsDisplaingSearchResult(false);
        setInpitValuedeliveryPostOffice(event.target.innerHTML);
        const deliveryInfo = {
            "deliveryCompaty": cargoCarrier,
            "deliveryCity": deliveryCity,
            "deliveryPost": inpitValuedeliveryPostOffice
        };
        setClientAdresslInfo(deliveryInfo)
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
                        className="basket-input active-field delivery-sity"
                        placeholder="Введіть місто"
                        value={deliveryCity}
                        onChange={citySelection}
                        required
                    />
                    <div className={`search-results ${(isDisplaingSearchResult === false || cityData.length == 0) ? "display-none" : "diplay-block"} `}>
                        {cityData.map((item, index) => (
                            <div key={index} className="search-result-item" onClick={updateDeliveryCity} id={item.DeliveryCity}>
                                {item.Present}
                            </div>
                        ))}
                    </div>

                    <label htmlFor="userDepartment"
                        className='basket-label-title'
                    >Номер відділення або поштомату</label>
                    <input
                        id="userDepartment"
                        type="text"
                        className="basket-input active-field delivery-post-office"
                        placeholder="Введіть номер відділення"
                        onChange={departmentSelection}
                        value={inpitValuedeliveryPostOffice}
                        required
                    />
                    <div
                        className={`search-results-delivery-offise ${(isDisplaingSearchResult === false || inpitValuedeliveryPostOffice.length == 0 || searchResultPostOffice.length == 0) ? "display-none" : "diplay-block-post-office"} `}

                    >
                        {searchResultPostOffice.map((item, index) => (
                            <div key={index} className="search-result-item" onClick={updateDeliveryPostOffice} id={item.DeliveryCity}>
                                {item.Description}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default React.memo(BasketDeliveryInfo);



