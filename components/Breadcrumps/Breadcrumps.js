import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';


function BreadCrumps() {
    const router = useRouter();
    // console.log(router.query)
    // const categoryName = router.query.category;
    const categoryName = router.query.category;
    const subCategoryName = router.query.subcategory;
    const id = router.query.id;


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
            <p className='bread-crum-text-way'>/
                <Link href={`/${categoryName}`}>
                    {categoryName}
                </Link>
                /<Link href={`/${subCategoryName}`}>
                    {subCategoryName}
                </Link>
                {id ? `/${id}` : null}
                {/* <Link href={`/${categoryName}/${subCategoryName}`}>
                    {subCategoryName}
                </Link> */}
            </p>
        </div>
    )
};

export default React.memo(BreadCrumps);