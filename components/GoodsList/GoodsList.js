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
    const [listGoods, setListGoods] = useState(props);
    const [selectedFilterOption, setSelectedFilterOption] = useState("Новинки");
    const [isЕhereАilter, setIsЕhereАilter] = useState("");
    const [activePage, setActivePage] = useState(1);



    // console.log(isЕhereАilter)
    const router = useRouter();
    const subCategoryName = router.query.subcategory;


    async function getData(event) {
        const { result } = await GetdData(event - 1, id, subCategoryName);
        setListGoods(result.data);
    };

    async function getFilteredDataMinMax(event) {
        const { result } = await GetFilteredData(event - 1, id, 1, subCategoryName);
        setListGoods(result.data);
    };

    async function getFilteredDataMaxMin(event) {
        const { result } = await GetFilteredData(event - 1, id, -1, subCategoryName);
        setListGoods(result.data);
    };


    async function handlePageChange(event) {
        // console.log(event)
        // console.log(isЕhereАilter)
        if (isЕhereАilter.length === 0 || isЕhereАilter === "Новинки") {
            getData(event);
        }
        else if (isЕhereАilter == "Від дешевих до дорогих") {
            getFilteredDataMinMax(event);
        }
        else if (isЕhereАilter == "Від дорогих до дешевих") {
            getFilteredDataMaxMin(event);
        }
    };


    return (
        <div className='goods-list'>
            {listGoods && listGoods.length ?
                <>
                    <HeaderSelectorToFilter setSelectedFilterOption={setSelectedFilterOption} selectedFilterOption={selectedFilterOption} setIsЕhereАilter={setIsЕhereАilter} getFilteredDataMinMax={getFilteredDataMinMax} getFilteredDataMaxMin={getFilteredDataMaxMin} getData={getData} setActivePage={setActivePage} />
                    <div className="goods-list-render">
                        <AsideFilter id={id} />
                        <div className="goods-list-goods-items">
                            {listGoods.map(props => {
                                return (
                                    <GoodCardSmall key={props.id} props={props} listGoods={listGoods} />
                                );
                            })}
                        </div>
                    </div>
                    <PageIndexer handlePageChange={handlePageChange} total={total} setActivePage={setActivePage} activePage={activePage} />
                </> : null}
        </div>
    )
};

export default React.memo(GoodsList);