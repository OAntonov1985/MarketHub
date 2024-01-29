import GoodCardSmall from '../GoodCardSmall/GoodCardSmall';


export default function TopSellers({ topSellers }) {
    return (
        <>
            <h4 className='top-sellers-title title'>Топ продажів</h4>
            <div className="top-sellers-row">
                {!!topSellers.length && topSellers.map(topSellers => {
                    return (
                        <GoodCardSmall props={topSellers} />
                    );
                })};
            </div>
        </>
    )
}