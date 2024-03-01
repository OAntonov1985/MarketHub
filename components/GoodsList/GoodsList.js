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
    const [selectedOption, setSelectedOption] = useState("Новинки");
    const [activePage, setActivePage] = useState(1);



    // console.log(total)
    const router = useRouter();
    const subCategoryName = router.query.subcategory;
    // console.log(subCategoryName)

    async function handlePageChange(event) {
        const { result } = await GetdData(event - 1, id, subCategoryName);
        setListGoods(result.data);
    };


    // useEffect(() => {
    //     // const fetchData = async () => {
    //     //     try {
    //     //         const data = await GetFilteredData(selectedOption, id);
    //     //         console.log(data);
    //     //         setListGoods(data.data);
    //     //         setActivePage(1);
    //     //     } catch (error) {
    //     //         console.error(error);
    //     //     }
    //     // };
    //     // fetchData();
    // }, [listGoods]);

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