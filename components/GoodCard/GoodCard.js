import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import BreadCrumps from '../Breadcrumps/Breadcrumps';
import GoodCardSlider from '../GoodCardSlider/GoodCardSlider';
import React from 'react';
import GoodCardDescription from '../GoodCardDescription/GoodCardDescription';

function GoodCard({ props }) {

    return (
        <div className="good-card">
            <Header />
            <div className="good-card-main-content">
                <BreadCrumps />
                <div className="good-card-container">
                    <GoodCardSlider props={props} />
                    <GoodCardDescription props={props} />
                </div>
            </div>
            <Footer />
        </div>
    )
};

export default React.memo(GoodCard);