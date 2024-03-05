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
    const [activePage, setActivePage] = useState(1);
    const [totalItems, setTotalItems] = useState();

    const [prciseStart, setPriceStart] = useState('');
    const [prciseEnd, setPriceEnd] = useState('');
    const [brandsToFilter, setBrandsTofilter] = useState([]);
    const [isAvailabale, setIsAvailabale] = useState(false);
    const [sortIndex, setSortIndex] = useState(0);

    const objToAsideFilter = { setIsAvailabale, setPriceStart, setPriceEnd, setBrandsTofilter, brandsToFilter, applyChangesAsideFilter, prciseEnd, prciseStart, isAvailabale, };


    const router = useRouter();
    const subCategoryName = router.query.subcategory;

    // отримання даних без фільтру//
    async function getData(event) {
        const { result } = await GetdData(event - 1, id, subCategoryName);
        setListGoods(result.data);
    };

    // отримання даних виходячи з бічного фільтру//
    async function getFilteredDataMinMax() {
        const { result } = await GetFilteredData(id, sortIndex, activePage === 1 ? 0 : activePage - 1, prciseStart, prciseEnd, brandsToFilter);
        setTotalItems(result.total)
        setListGoods(result.data);
    };


    useEffect(() => {
        getFilteredDataMinMax();
    }, [sortIndex, activePage]);


    function applyChangesAsideFilter() {
        getFilteredDataMinMax()

    }


    return (
        <div className='goods-list'>
            {listGoods && listGoods.length ?
                <>
                    <HeaderSelectorToFilter setSelectedFilterOption={setSelectedFilterOption} selectedFilterOption={selectedFilterOption} getData={getData} setActivePage={setActivePage} setSortIndex={setSortIndex} />
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
                    <PageIndexer total={total} setActivePage={setActivePage} activePage={activePage} totalItems={totalItems} sortIndex={sortIndex} />
                </> : null}
        </div>
    )
};

export default React.memo(GoodsList);