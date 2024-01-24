import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from "next/router";

export default function Error404() {
    const router = useRouter();


    return (
        <div className='error-page'>
            <div className="error-page-left-column">
                <div className="error-page-image-container">
                    <Image
                        alt="image of computer"
                        src='/errorImage.png'
                        quality={100}
                        fill
                        style={{
                            objectFit: 'contain',
                            width: '100%'
                        }}
                    />
                </div>
            </div>

            <div className="error-page-right-column">
                <p className='error-page-404'>404</p>
                <p className='error-page-text-alert'>Ой! Схоже, ви загубилися в цифровому просторі. Сторінку, яку ви шукали, не знайдено</p>
                <Link href='/'>
                    <div className='error-page-div-for-button'>
                        <button className='error-page-button-tomain'>Головна сторінка</button>
                    </div>

                </Link>

            </div>
        </div>
    );
}
