import GoodCardSmall from '../GoodCardSmall/GoodCardSmall';
import React from 'react';


function PromotionsOnMain({ promotionGoods }) {
    // console.log(promotionGoods)
    return (
        <>
            <h4 className='top-sellers-title title'>Акції</h4>
            <div className="top-sellers-row">
                {!!promotionGoods.length && promotionGoods.map(promotionGoods => {
                    return (
                        <GoodCardSmall key={promotionGoods.id} props={promotionGoods} />
                    );
                })}
            </div>
        </>
    );
};

export default React.memo(PromotionsOnMain);