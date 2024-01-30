import HeaderSelectorToFilter from '../SelectorInHeadInGoodPage/SelectorInHeadInGoodPage';


function GoodsList({ goods }) {
    console.log(goods);
    return (
        <div className='goods-list'>
            <HeaderSelectorToFilter />
            <div className="goods-list-render">
                <div className="goods-list-filter-column">Тут може бути ваша реклама</div>
                <div className="goods-list-goods-items"></div>
            </div>
        </div>
    )
};


export default GoodsList;