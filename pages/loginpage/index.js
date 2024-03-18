import React from 'react';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import SingIn from '@/components/SingIn/SingIn';
import Registration from '@/components/Registration/Registration';
import Head from 'next/head';
import backgroundImageg from "@/public/Back.png"
import Spinner from '@/components/Spinner/Spinner';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';



function LogInPage() {
    const [isRegistration, setIsRegistration] = useState(true);
    const [loading, setLoading] = useState(false);
    const userNameCookie = Cookies.get('jwtToken');
    const router = useRouter();

    let { userName } = useSelector((state) => state.user);

    console.log('refresh')
    useEffect(() => {
        console.log('go')
        if (userName) {
            router.push('/userpage')
        }
    }, [userName, userNameCookie])


    const toggleMode = () => {
        setIsRegistration(prevState => !prevState);
    };
    const obj = { loading, setLoading, toggleMode }

    return (
        <>
            <Head>
                <title>Сторінка автентифікації/реєстрації клієнта</title>
                <link rel="icon" href="/frame3810.png" sizes="any" />
                <meta name='MarketHub' content="width=device-width, initial-scale=1.0"></meta>
            </Head>
            <main className='login-page'>
                {loading === true ? <Spinner /> : null}
                <Image
                    alt="background image"
                    src={backgroundImageg}
                    quality={70}
                    placeholder="blur"
                    sizes="100vw"
                    layout="fill"
                    priority
                    style={{
                        objectFit: "cover",
                        zIndex: -1,
                    }}
                />

                <div className="content">
                    {isRegistration ?
                        <SingIn props={obj} /> :
                        <Registration props={obj} />}
                    <Image
                        // onClick={pushUser}
                        alt="logo image"
                        src='/logo.png'
                        quality={100}
                        width={146}
                        height={75}
                        className='logo-image singin-logo'
                        priority
                        style={{
                            position: 'absolute',
                            top: ".5rem",
                            zIndex: 1,
                            marginTop: "2.4rem"
                        }}
                    />
                </div>
            </main>

        </>
    );
}
export default React.memo(LogInPage);



