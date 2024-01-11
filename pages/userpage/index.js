import { useEffect } from 'react';
// import { useRouter } from 'next/router';

// "use client"
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'

const Profile = () => {
    const JWT = Cookies.get('jwtToken');
    const router = useRouter()
    // console.log(JWT)

    useEffect(() => {
        if (!JWT) {
            router.push('/loginpage/')
        }
    }, [router]);

    // if (!JWT) {
    //     router.push('/loginpage/')
    // }
    return (
        <>
            <h1>Your Profile</h1>
            {/* <pre>{JSON.stringify(user, null, 2)}</pre> */}
        </>
    )
}

export default Profile

















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