import HeaderSelectorToFilter from '../SelectorInHeadInGoodPage/SelectorInHeadInGoodPage';
import GoodCardSmall from '../GoodCardSmall/GoodCardSmall';
import AsideFilter from '../AsideFilter/AsideFilter';
import React from 'react';
import PageIndexer from '../PageIndexer/PageIndexer';
import { useState, useEffect } from 'react';
import GetFilteredData from '@/pages/api/GetFilteredData';
import GetdData from '@/pages/api/GetData';
import { useRouter } from 'next/router';

function GoodsList({ props, id, total }) {
    const [listGoods, setListGoods] = useState(props);  /// Отримує список товарів з бекенду ///
    const [selectedFilterOption, setSelectedFilterOption] = useState("Новинки"); /// Встановлює опцію сортування (Новинки Від Від) ///
    const [activePage, setActivePage] = useState(1); /// Встановлює активну сторінку перегляду знизу ///
    const [totalItems, setTotalItems] = useState(); /// Отримує загальну кількість одиниць товарів ///

    const [prciseStart, setPriceStart] = useState(''); /// Встановлює значення в полі ВІД e aside фільтрі ///
    const [prciseEnd, setPriceEnd] = useState('');  /// Встановлює значення в полі ДО e aside фільтрі ///
    const [brandsToFilter, setBrandsTofilter] = useState([]); /// Отримує список брендів з бекенду ///
    const [isAvailabale, setIsAvailabale] = useState(false); /// Встановлює опцію фільтрування "Є в наявності"///
    const [sortIndex, setSortIndex] = useState(0); /// Встановлює сортування (-1, 1, 0)///
    const [pageLoaded, setPageLoaded] = useState(false); /// Запобігає зайвому запуску функції ///

    const objToAsideFilter = { setIsAvailabale, setPriceStart, setPriceEnd, setBrandsTofilter, brandsToFilter, applyChangesAsideFilter, prciseEnd, prciseStart, isAvailabale, };


    const router = useRouter();
    const subCategoryName = router.query.subcategory;

    // // отримання даних без фільтру//
    // async function getData(event) {
    //     const { result } = await GetdData(event - 1, id, subCategoryName);
    //     setListGoods(result.data);
    // };

    // отримання даних виходячи з бічного фільтру//
    async function getFilteredDataMinMax() {
        const { result } = await GetFilteredData(id, sortIndex, activePage === 1 ? 0 : activePage - 1, prciseStart, prciseEnd, brandsToFilter, isAvailabale, subCategoryName);
        // console.log(result.data)
        setTotalItems(result.total)
        setListGoods(result.data);
    };

    function selectPageAndGetData() {
        // console.log(activePage)
        getFilteredDataMinMax();
    }

    useEffect(() => {
        if (pageLoaded) {
            getFilteredDataMinMax();
        } else {
            setPageLoaded(true);
        }
    }, [selectedFilterOption, activePage]);


    function applyChangesAsideFilter() {
        getFilteredDataMinMax();
    }


    return (
        <div className='goods-list'>
            {listGoods && listGoods.length ?
                <>
                    <HeaderSelectorToFilter setSelectedFilterOption={setSelectedFilterOption} selectedFilterOption={selectedFilterOption} setActivePage={setActivePage} setSortIndex={setSortIndex} />
                    <div className="goods-list-render">
                        <AsideFilter id={id} objToAsideFilter={objToAsideFilter} />
                        <div className="goods-list-goods-items">
                            {listGoods.map(props => {
                                return (
                                    <GoodCardSmall key={props.id} props={props} listGoods={listGoods} />
                                );
                            })}
                        </div>
                    </div>
                    <PageIndexer total={total} setActivePage={setActivePage} activePage={activePage} totalItems={totalItems} sortIndex={sortIndex} selectPageAndGetData={selectPageAndGetData} />
                </> : null}
        </div>
    )
};

export default React.memo(GoodsList);


