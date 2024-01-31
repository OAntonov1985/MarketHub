import HeaderSelectorToFilter from '../SelectorInHeadInGoodPage/SelectorInHeadInGoodPage';
import GoodCardSmall from '../GoodCardSmall/GoodCardSmall';
import AsideFilter from '../AsideFilter/AsideFilter';


function GoodsList({ props }) {
    // console.log(props);

    return (
        <div className='goods-list'>
            <HeaderSelectorToFilter />
            <div className="goods-list-render">
                <AsideFilter />
                <div className="goods-list-goods-items">
                    {/* {!!props.length && props.slice(0, 12).map(props => {
                        return (
                            <GoodCardSmall key={props.id} props={props} />
                        );
                    })}; */}
                </div>
            </div>
            <div className='page-selector'>numbers</div>
        </div>
    )
};


export default GoodsList;