import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import SingIn from '@/components/SingIn/SingIn';
import Registration from '@/components/Registration/Registration';
import Head from 'next/head';
import backgroundImageg from "@/public/Back.png"
import Spinner from '@/components/Spinner/Spinner';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import { loading } from "@/slices/userSlice";



function LogInPage() {
    const [isRegistration, setIsRegistration] = useState(true);
    const { loading } = useSelector((state) => state.user);
    const router = useRouter();


    const toggleMode = () => {
        setIsRegistration(prevState => !prevState);
    };
    const obj = { loading, toggleMode, isRegistration }

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
                    className='bg-image-login-page'
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
                        onClick={() => router.push("/")}
                        alt="logo image"
                        src='/logo.png'
                        quality={100}
                        width={146}
                        height={75}
                        className='singin-logo'
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



