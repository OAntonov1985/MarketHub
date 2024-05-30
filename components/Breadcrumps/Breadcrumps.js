import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';



function BreadCrumps({ goods }) {
    const router = useRouter();

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
            <Link href={`/${goods.category_details.name}`} id={goods.category_details.id} className='bread-crum-text-way'>/
                <p>{goods.category_details.name}</p>
            </Link>
            {router.pathname === "/[category]" ? null : <p className='bread-crum-text-way'>/{goods.sub_category_detail.name}</p>}
        </div >
    )
};

export default React.memo(BreadCrumps);
