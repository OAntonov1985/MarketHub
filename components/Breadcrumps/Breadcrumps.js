import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';



function BreadCrumps() {
    const router = useRouter();

    // function redirectUser(event) {

    // }

    let categoryName = router.query.category;
    let subCategoryName = router.query.subcategory;
    let id = router.query.id;
    // console.log(id)
    // console.log(subID)


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

            <Link href={"#"} className='bread-crum-text-way'>/
                <p href={`/${categoryName}`}>
                    {categoryName}
                </p>
                {subCategoryName === undefined ? "" : `/${subCategoryName}`}{id ? `/${id}` : ""}
            </Link>
        </div >
    )
};

export default React.memo(BreadCrumps);
