import HeaderSelectorToFilter from '../SelectorInHeadInGoodPage/SelectorInHeadInGoodPage';
import GoodCardSmall from '../GoodCardSmall/GoodCardSmall';


function GoodsList({ goods }) {
    console.log(goods);

    return (
        <div className='goods-list'>
            <HeaderSelectorToFilter />
            <div className="goods-list-render">
                <div className="goods-list-filter-column">Тут може бути ваша реклама</div>
                <div className="goods-list-goods-items">
                    {!!goods.length && goods.slice(0, 12).map(goods => {
                        return (
                            <GoodCardSmall key={goods.id} props={goods} />
                        );
                    })};
                </div>
            </div>
        </div>
    )
};


export default GoodsList;