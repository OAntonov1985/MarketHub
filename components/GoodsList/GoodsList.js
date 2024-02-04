import HeaderSelectorToFilter from '../SelectorInHeadInGoodPage/SelectorInHeadInGoodPage';
import GoodCardSmall from '../GoodCardSmall/GoodCardSmall';
import AsideFilter from '../AsideFilter/AsideFilter';
import React from 'react';


function GoodsList({ props }) {
    // console.log(props.products);
    // const good = props.products.slise
    // const props = props.products



    return (
        <div className='goods-list'>
            <HeaderSelectorToFilter />
            <div className="goods-list-render">
                <AsideFilter />
                <div className="goods-list-goods-items">
                    {!!props.products.length && props.products.slice(0, 12).map(props => {
                        return (
                            <GoodCardSmall key={props.id} props={props} />
                        );
                    })};
                </div>
            </div>
        </div>
    )
};


export default React.memo(GoodsList);