import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Link from 'next/link';
import Image from 'next/image';
import GoodCardSlider from '../GoodCardSlider/GoodCardSlider';
import React from 'react';
import GoodCardDescription from '../GoodCardDescription/GoodCardDescription';
import { useRouter } from 'next/router';

function GoodCard({ props, breadCrumpData }) {
    const { category, subcategory, title } = breadCrumpData || {};
    const router = useRouter();
    // console.log(router)
    // const { category, subcategory } = router.query;
    // console.log(breadCrumpData)

    return (
        <div className="good-card">
            <Header />
            <div className="good-card-main-content">
                <div className='theWay'>
                    <Link href={"/"} className="logo-bread-crum">
                        <Image
                            alt="logo home"
                            src='/breadcrum/home-outline.svg'
                            quality={100}
                            width={16}
                            height={16} />
                    </Link>
                    <Link href={`/${category.name}`} id={category.id} className='bread-crum-text-way'>/
                        <p>{category.name}</p>
                    </Link>
                    <Link href={`/${category.name}/${subcategory.name}`} id={subcategory.id} className='bread-crum-text-way'>/
                        <p>{subcategory.name}</p>
                    </Link>
                    <p className='bread-crum-text-way'>/{title}</p>
                </div>
                <div className="good-card-container">
                    <GoodCardSlider props={props} />
                    <GoodCardDescription props={props} breadCrumpData={breadCrumpData} />
                </div>
            </div>
            <Footer />
        </div>
    )
};

export default React.memo(GoodCard);