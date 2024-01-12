import { useEffect } from 'react';
// import { useRouter } from 'next/router';
import Link from 'next/link';
import Header from '@/components/Header/Header';


export default function UserPage() {
    return (
        <>
            <Header />
            <h1>Your Profile</h1>
            {/* <pre>{JSON.stringify(user, null, 2)}</pre> */}
            <Link href='/mainpage/' className='main-link'>
                <p className='main-link'>Головна сторінка з категоріями і пошуком</p>
            </Link>
            <Link href='/' className='main-link'>
                <p className='main-link'>Головна сторінка</p>
            </Link>

        </>
    )
}

// "use client"
// import Cookies from 'js-cookie'
// import { useRouter } from 'next/router'

// const Profile = () => {
//     const JWT = Cookies.get('jwtToken');
//     const router = useRouter()
//     // console.log(JWT)

//     useEffect(() => {
//         if (!JWT) {
//             router.push('/loginpage/')
//         }
//     },);

//     // if (!JWT) {
//     //     router.push('/loginpage/')
//     // }
//     return (
//         <>
//             <Header />
//             <h1>Your Profile</h1>
//             {/* <pre>{JSON.stringify(user, null, 2)}</pre> */}
//             <Link href='/mainpage/' className='main-link'>
//                 <p className='main-link'>Головна сторінка з категоріями і пошуком</p>
//             </Link>
//             <Link href='/' className='main-link'>
//                 <p className='main-link'>Головна сторінка</p>
//             </Link>
//         </>
//     )
// }

// export default Profile

















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