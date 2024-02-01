import GoodCardSmall from '../GoodCardSmall/GoodCardSmall';


export default function TopSellers({ props }) {
    // console.log(props)
    return (
        <>
            <h4 className='top-sellers-title title'>Топ продажів</h4>
            <div className="top-sellers-row">
                {!!props.length && props.slice(0, 4).map(topSellers => {
                    return (
                        <GoodCardSmall key={props.id} props={topSellers} />
                    );
                })}
            </div>
        </>
    )
}