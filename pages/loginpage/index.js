import React from 'react';
import Image from 'next/image';
import SingIn from '@/components/SingIn/SingIn';
import bg from "@/public/vector1.svg"



export default function LogInPage() {
    return (
        <>

            <Image
                alt="Mountains"
                src={bg}
                // placeholder="blur"
                quality={100}
                fill
                sizes="100%, 100%"
                style={{
                    objectFit: 'cover',
                    zIndex: -1,
                    // width: 100vw,
                    // backgroundPosition: .55, top
                    // backgroundSize: 100 % auto
                }}
            />
            <SingIn />
        </>

    );
}



