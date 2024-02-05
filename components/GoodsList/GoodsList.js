import HeaderSelectorToFilter from '../SelectorInHeadInGoodPage/SelectorInHeadInGoodPage';
import GoodCardSmall from '../GoodCardSmall/GoodCardSmall';
import AsideFilter from '../AsideFilter/AsideFilter';
import React from 'react';
import PageIndexer from '../PageIndexer/PageIndexer';
import { useState } from 'react';

function GoodsList({ props }) {
    // console.log(props);

    const [listGoods, setListGoods] = useState([]);

    const fetchData = async (num) => {
        try {
            const response = await fetch(`https://dummyjson.com/products?limit=12&skip=${num}`);
            const data = await response.json();
            // console.log(data.products);
            setListGoods(data.products)

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };



    const handlePageChange = (event) => {
        let num
        if (event === 1) num = 0
        else num = (event - 1) * 12
        fetchData(num);
    };



    return (
        <div className='goods-list'>
            <HeaderSelectorToFilter />
            <div className="goods-list-render">
                <AsideFilter />
                <div className="goods-list-goods-items">
                    {!!(listGoods ? listGoods : props).length && (listGoods ? listGoods : props).map(props => {
                        return (
                            <GoodCardSmall key={props.id} props={props} listGoods={listGoods} />
                        );
                    })};
                </div>

            </div>
            <PageIndexer props={props.total} handlePageChange={handlePageChange} />
        </div>
    )
};


export default React.memo(GoodsList);