import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect } from 'react';


export default function BreadCrumps() {
    const router = useRouter();
    // console.log(router.query)
    // const categoryName = router.query.category;
    const categoryName = router.query.category;
    const subCategoryName = router.query.subcategory;


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
                /{subCategoryName}
                {/* <Link href={`/${categoryName}/${subCategoryName}`}>
                    {subCategoryName}
                </Link> */}
            </p>
        </div>
    )
};