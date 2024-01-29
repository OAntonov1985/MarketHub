import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';


export default function BreadCrumps() {
    const router = useRouter();
    const currentPath = router.query.category;
    // console.log(currentPath)

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

            <p className='bread-crum-text-way'>/{currentPath}</p>
        </div>
    )
};