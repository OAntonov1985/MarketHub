import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';



function BreadCrumps({ goods }) {
    const router = useRouter();
    // console.log(router.query)

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
            <Link href={`/${goods ? goods.category_details.name : router.query.category}`} id={goods ? goods.category_details.id : null} className='bread-crum-text-way'>/
                <p>{goods ? goods.category_details.name : router.query.category}</p>
            </Link>
            {router.pathname === "/[category]" ? null : <p className='bread-crum-text-way'>/{goods ? goods.sub_category_detail.name : router.query.category}</p>}
        </div >
    )
};

export default React.memo(BreadCrumps);
