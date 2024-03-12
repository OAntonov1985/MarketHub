import React from 'react';
import RightColumnAddNewGood from './RightColumnAddNewGood';

function RightColumnGoodsList() {
    return (
        <>
            <RightColumnAddNewGood />
        </>
    )
}

export default React.memo(RightColumnGoodsList);