import { useState } from 'react';
import Image from 'next/image';


export default function ShowOrHidePasswordIcon({ props }) {
    const { showPassword, setShowPassword } = props;
    const [wayToIcon, setWayToIcon] = useState('/pass.png');


    const showOrHidePassword = () => {
        setShowPassword((showPassword) => (showPassword === 'password' ? 'text' : 'password'));
        setWayToIcon((wayToIcon) => (wayToIcon === '/pass.png' ? '/nopass.png' : '/pass.png'));
    }

    return (
        <div className='img-button'>
            <Image className='showOrHidePassword'
                src={wayToIcon}
                alt='icon show password'
                width={28}
                height={28}
                onClick={showOrHidePassword}
            />
        </div>
    )
};

