import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import SingIn from '@/components/SingIn/SingIn';
import Registration from '@/components/Registration/Registration';
import backgroundImageg from "@/public/Back.png"
import bgupsidedown from "@/public/vectorupsidedown.svg"



function LogInPage() {

    const [isRegistration, setIsRegistration] = useState(true);

    const toggleMode = () => {
        setIsRegistration(prevState => !prevState);
    };

    return (
        <div className='login-page'>
            <Image
                alt="background image"
                src={backgroundImageg}
                quality={100}
                layout="fill"
                objectFit="cover"
                objectPosition="55% top"
                style={{
                    zIndex: -1,
                }}
            />
            <div className="content">
                {isRegistration ? <SingIn toggleMode={toggleMode} /> : <Registration toggleMode={toggleMode} />}

            </div>


        </div>

    );
}
export default React.memo(LogInPage);



