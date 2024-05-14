"use client";
import Head from "next/head";
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import UserPageLeftColumn from '@/components/UserPage/UserPageLeftColumn';
import UserPageRightColumn from '@/components/UserPage/UserPageRightColumn';
import Spinner from '@/components/Spinner/Spinner';
import { useSelector } from 'react-redux';
import { getSession } from 'next-auth/react'
import { useRouter } from 'next/router'


export default function UserPage() {
    const { loading } = useSelector((state) => state.user);

    return (
        <div className='userPage'>
            {loading ? <Spinner /> : null}
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
export async function getServerSideProps(context) {
    const session = await getSession(context)
    // console.log(session)
    if (!session) {
        return {
            redirect: {
                destination: '/loginpage',
                permanent: false,
            },
        }
    }
    return {
        props: {}, // передаваемые props
    }
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