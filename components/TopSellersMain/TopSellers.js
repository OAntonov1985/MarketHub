import GoodCardSmall from '../GoodCardSmall/GoodCardSmall';


export default function TopSellers({ props }) {
    // console.log(props.id)
    return (
        <>
            <h4 className='top-sellers-title title'>Топ продажів</h4>
            <div className="top-sellers-row">
                {!!props.length && props.slice(15, 19).map(topSellers => {
                    return (
                        <GoodCardSmall key={topSellers.id} props={topSellers} />
                    );
                })}
            </div>
        </>
    )
}