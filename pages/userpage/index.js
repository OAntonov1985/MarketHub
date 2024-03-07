"use client";
import Head from "next/head";
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import UserPageLeftColumn from '@/components/UserPage/UserPageLeftColumn';
import UserPageRightColumn from '@/components/UserPage/UserPageRightColumn';


export default function UserPage() {
    const router = useRouter();


    // const deleteUserInfo = () => {
    //     Cookies.remove('jwtToken');
    //     Cookies.remove('userName');
    //     Cookies.remove('userPhone');
    //     Cookies.remove('userSurname');
    //     Cookies.remove('userEmail');
    //     Cookies.remove('userID');
    //     router.push('/');
    // }
    return (
        <div className='userPage'>
            <Head>
                <title>MarketHub - знайденться все!</title>
                <link rel="icon" href="/frame380.png" sizes="any" />
                <meta name='MarketHub' content='MarketHub - тут може бути Ваша реклама' />
            </Head>
            <Header />
            <div className='userPage-content'>
                <UserPageLeftColumn />
                <UserPageRightColumn />
            </div>
            <Footer />
        </div>
    )
}




{/* <Link href='/mainpage/' className='main-link'>
<p className='main-link'>Головна сторінка з категоріями і пошуком</p>
</Link>
<Link href='/' className='main-link'>
<p className='main-link'>Головна сторінка</p>
</Link>
<button onClick={deleteUserInfo}>Вийти з акаунту</button> */}














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