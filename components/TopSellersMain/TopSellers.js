import GoodCardSmall from '../GoodCardSmall/GoodCardSmall';


export default function TopSellers({ topSellers }) {
    // console.log(topSellers)
    return (
        <>
            <h4 className='top-sellers-title title'>Топ продажів</h4>
            <div className="top-sellers-row">
                {!!topSellers.length && topSellers.slice(0, 4).map(topSellers => {
                    return (
                        <GoodCardSmall key={topSellers.id} props={topSellers} />
                    );
                })};
            </div>
        </>
    )
}