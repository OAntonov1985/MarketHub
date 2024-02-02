import HeaderSelectorToFilter from '../SelectorInHeadInGoodPage/SelectorInHeadInGoodPage';
import GoodCardSmall from '../GoodCardSmall/GoodCardSmall';
import AsideFilter from '../AsideFilter/AsideFilter';
import PageIndexer from '../PageIndexer/PageIndexer';


function GoodsList({ props }) {
    // console.log(props.length);



    return (
        <div className='goods-list'>
            <HeaderSelectorToFilter />
            <div className="goods-list-render">
                <AsideFilter />
                <div className="goods-list-goods-items">
                    {!!props.length && props.slice(0, 12).map(props => {
                        return (
                            <GoodCardSmall key={props.id} props={props} />
                        );
                    })};

                </div>
            </div>
            <PageIndexer props={props.length} />
        </div>
    )
};


export default GoodsList;