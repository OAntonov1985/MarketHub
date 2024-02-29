import HeaderSelectorToFilter from '../SelectorInHeadInGoodPage/SelectorInHeadInGoodPage';
import GoodCardSmall from '../GoodCardSmall/GoodCardSmall';
import AsideFilter from '../AsideFilter/AsideFilter';
import React from 'react';
import PageIndexer from '../PageIndexer/PageIndexer';
import { useState, useEffect } from 'react';
import { MaketHubURL } from "../Constants";
import GetFilteredData from '@/pages/api/GetFilteredData';

function GoodsList({ props, id, total }) {
    const [listGoods, setListGoods] = useState(props);
    const [selectedOption, setSelectedOption] = useState("Новинки");
    const [activePage, setActivePage] = useState(1);

    const fetchData = async (num) => {
        try {
            const response = await fetch(MaketHubURL + `goods/categories/${id}/${num}/12`);
            const data = await response.json();
            setListGoods(data.data)

        } catch (error) {
            console.error('Упс... Щось пішло не так!', error);
        }
    };

    const handlePageChange = (event) => {
        let num
        if (event === 1) num = 0;
        fetchData(event);
    };


    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const data = await GetFilteredData(selectedOption, id);
    //             console.log(data);
    //             setListGoods(data.data);
    //             setActivePage(1);
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     };
    //     fetchData();
    // }, [selectedOption, id]);

    return (
        <div className='goods-list'>
            {listGoods && listGoods.length ?
                <>
                    <HeaderSelectorToFilter setSelectedOption={setSelectedOption} selectedOption={selectedOption} id={id} />
                    <div className="goods-list-render">
                        <AsideFilter />
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