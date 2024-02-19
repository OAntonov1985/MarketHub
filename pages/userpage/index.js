"use client";


import { useEffect } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';


export default function UserPage() {
    const router = useRouter();

    const deleteUserInfo = () => {
        Cookies.remove('jwtToken');
        Cookies.remove('userName');
        Cookies.remove('userPhone');
        Cookies.remove('userSurname');
        Cookies.remove('userEmail');
        Cookies.remove('userID');
        router.push('/');
    }
    return (
        <>
            {/* <GoodCard /> */}
            <Header />
            <p>Your Profile</p>
            {/* <div>привіт {userName}</div>
            <pre>{JSON.stringify(user, null, 2)}</pre> */}
            <Link href='/mainpage/' className='main-link'>
                <p className='main-link'>Головна сторінка з категоріями і пошуком</p>
            </Link>
            <Link href='/' className='main-link'>
                <p className='main-link'>Головна сторінка</p>
            </Link>
            <button onClick={deleteUserInfo}>Вийти з акаунту</button>
            <Footer />
        </>
    )
}



















// import Header from '@/components/Header';
// import Footer from '@/components/Footer';


// function UserPage() {
//     return (
//         <>
//             <Header />
//             <div>Це сторінка користувача</div>
//             <Footer />
//         </>
//     )
// }
// export default UserPage