import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';



function BreadCrumps({ breadCrumpData }) {
    const router = useRouter();

    let categoryName = router.query.category;
    let subCategoryName = router.query.subcategory;
    let id = router.query.id;



    return (
        <div className='theWay'>
            <Link href={"/"} className="logo-bread-crum">
                <Image
                    alt="logo home"
                    src='/breadcrum/home-outline.svg'
                    quality={100}
                    width={16}
                    height={16} />
            </Link>
            {/* <p className='bread-crum-text-way'>/
                <p href={`/${category}`}>
                    {category}
                </p>
                {subcategory === undefined ? "" : `/${subcategory}`}{title ? `/${title}` : ""}
            </p> */}

            <p className='bread-crum-text-way'>/
                <p href={`/${categoryName}`}>
                    {categoryName}
                </p>
                {subCategoryName === undefined ? "" : `/${subCategoryName}`}{id ? `/${id}` : ""}
            </p>
        </div >
    )
};

// export default React.memo(BreadCrumps);
export default BreadCrumps;