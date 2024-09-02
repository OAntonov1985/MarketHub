import React, { useRef } from 'react';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import ReactPlayer from 'react-player';


export default function About() {
    const playerRef = useRef(null);
    return (
        <>
            <Head>
                <title>MarketHub - команда, яка створила цей проект</title>
                <link rel="icon" href="/frame380.png" sizes="any" />
                <meta name='MarketHub' content='MarketHub - тут може бути Ваша реклама' />
            </Head>
            <div className='about-my-dream-team'>
                <Header />
                <div className="about-content">
                    <h4 className='about-title'>Наша команда</h4>
                    <div className="about-container">
                        <div className="about-team PM">
                            <div className="image-container-about">
                                <Image
                                    className='photo-our-team'
                                    alt="photo-our-team"
                                    src={"/about/Arina.png"}
                                    quality={100}
                                    fill
                                    sizes="(max-width: 100%)"
                                    style={{
                                        objectFit: 'cover',
                                        width: '100%'
                                    }}>
                                </Image>
                            </div>
                            <div className="team-info">
                                <p>Лисенко Аріна</p>
                                <p>Project manager</p>
                                <Link
                                    className='about-linkedin'
                                    href="https://www.linkedin.com/in/arin77/"
                                    target="_blank">LinkedIn</Link>
                            </div>
                        </div>
                        <div className="about-team desinger">
                            <div className="image-container-about">
                                <Image
                                    className='photo-our-team'
                                    alt="photo-our-team"
                                    src={"/about/Iryna.png"}
                                    quality={100}
                                    fill
                                    sizes="(max-width: 100%)"
                                    style={{
                                        objectFit: 'cover',
                                        width: '100%'
                                    }}>
                                </Image>
                            </div>
                            <div className="team-info">
                                <p>Кучерява Ірина</p>
                                <p>UX| IU дизайнер</p>
                                <Link
                                    className='about-linkedin'
                                    href="https://www.linkedin.com/in/ir-kucheriava/"
                                    target="_blank">LinkedIn</Link>
                            </div>
                        </div>
                        <div className="about-team frontend">
                            <div className="image-container-about">
                                <Image
                                    className='photo-our-team'
                                    alt="photo-our-team"
                                    src={"/about/Oleksandr.png"}
                                    quality={100}
                                    fill
                                    sizes="(max-width: 100%)"
                                    style={{
                                        objectFit: 'cover',
                                        width: '100%'
                                    }}>
                                </Image>
                            </div>
                            <div className="team-info">
                                <p>Антонов Олександр</p>
                                <p>Fullstack Developer</p>
                                <Link
                                    className='about-linkedin'
                                    href="https://www.linkedin.com/in/oleksandr-antonov-7a57b0285/"
                                    target="_blank">LinkedIn</Link>
                            </div>
                        </div>
                        <div className="about-team frontend">
                            <div className="image-container-about">
                                <Image
                                    className='photo-our-team'
                                    alt="photo-our-team"
                                    src={"/about/Ганна.png"}
                                    quality={100}
                                    fill
                                    sizes="(max-width: 100%)"
                                    style={{
                                        objectFit: 'cover',
                                        width: '100%'
                                    }}>
                                </Image>
                            </div>
                            <div className="team-info">
                                <p>Ганна Моїсеєнко</p>
                                <p>QA Engineer (Manual)</p>
                                <Link
                                    className='about-linkedin'
                                    href="https://www.linkedin.com/in/hanna-moiseienko/"
                                    target="_blank">LinkedIn</Link>
                            </div>
                        </div>
                        <div className="about-team frontend">
                            <div className="image-container-about">
                                <Image
                                    className='photo-our-team'
                                    alt="photo-our-team"
                                    src={"/about/Galyna.png"}
                                    quality={100}
                                    fill
                                    sizes="(max-width: 100%)"
                                    style={{
                                        objectFit: 'cover',
                                        // width: '100%'
                                    }}>
                                </Image>
                            </div>
                            <div className="team-info">
                                <p>Мальцева Галина</p>
                                <p>UX/UI Designer</p>
                                <Link
                                    className='about-linkedin'
                                    href="https://www.linkedin.com/in/halyna-maltseva/"
                                    target="_blank">LinkedIn</Link>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h4 className='tech-steck-title'> Технології, які використані на даному проекті:</h4>
                        <div className='tech-steck'>
                            <div className="tech-container">
                                <div className='tech-image-container'>
                                    <Image
                                        className='photo-our-team'
                                        alt="photo-our-team"
                                        src={"/tech-img/Next.js.svg"}
                                        quality={100}
                                        fill
                                        sizes="(max-width: 100%)"
                                        style={{
                                            objectFit: 'contain',
                                            width: '100%'
                                        }}>
                                    </Image>
                                </div>
                                <p className='tech-title'>Next JS</p>
                            </div>
                            <div className="tech-container">
                                <div className='tech-image-container'>
                                    <Image
                                        className='photo-our-team'
                                        alt="photo-our-team"
                                        src={"/tech-img/NextAuth.svg"}
                                        quality={100}
                                        fill
                                        sizes="(max-width: 100%)"
                                        style={{
                                            objectFit: 'contain',
                                            width: '100%',
                                            padding: 10
                                        }}>
                                    </Image>
                                </div>
                                <p className='tech-title'>NextAuth</p>
                            </div>
                            <div className="tech-container">
                                <div className='tech-image-container'>
                                    <Image
                                        className='photo-our-team'
                                        alt="photo-our-team"
                                        src={"/tech-img/redux toolkit.svg"}
                                        quality={100}
                                        fill
                                        sizes="(max-width: 100%)"
                                        style={{
                                            objectFit: 'contain',
                                            width: '100%'
                                        }}>
                                    </Image>
                                </div>
                                <p className='tech-title'>Redux Toolkit</p>
                            </div>
                            <div className="tech-container">
                                <div className='tech-image-container'>
                                    <Image
                                        className='photo-our-team'
                                        alt="photo-our-team"
                                        src={"/tech-img/Sass_Logo_Color.svg"}
                                        quality={100}
                                        fill
                                        sizes="(max-width: 100%)"
                                        style={{
                                            objectFit: 'contain',
                                            width: '100%'
                                        }}>
                                    </Image>
                                </div>
                                <p className='tech-title'>SASS</p>
                            </div>
                            <div className="tech-container">
                                <div className='tech-image-container'>
                                    <Image
                                        className='photo-our-team'
                                        alt="photo-our-team"
                                        src={"/tech-img/nova poshta-50.svg"}
                                        quality={100}
                                        fill
                                        sizes="(max-width: 100%)"
                                        style={{
                                            objectFit: 'contain',
                                            width: '100%',

                                        }}>
                                    </Image>
                                </div>
                                <p className='tech-title'>API Нової пошти</p>
                            </div>
                            <div className="tech-container">
                                <div className='tech-image-container'>
                                    <Image
                                        className='photo-our-team'
                                        alt="photo-our-team"
                                        src={"/tech-img/vercel-svgrepo-com2.svg"}
                                        quality={100}
                                        fill
                                        sizes="(max-width: 100%)"
                                        style={{
                                            objectFit: 'contain',
                                            width: '100%',

                                        }}>
                                    </Image>
                                </div>
                                <p className='tech-title'>Versel</p>
                            </div>
                            <div className="tech-container">
                                <div className='tech-image-container'>
                                    <Image
                                        className='photo-our-team'
                                        alt="photo-our-team"
                                        src={"/tech-img/icons8-express-js1.svg"}
                                        quality={100}
                                        fill
                                        sizes="(max-width: 100%)"
                                        style={{
                                            objectFit: 'contain',
                                            width: '100%',
                                            padding: 24

                                        }}>
                                    </Image>
                                </div>
                                <p className='tech-title'>Express JS</p>
                            </div>
                            <div className="tech-container">
                                <div className='tech-image-container'>
                                    <Image
                                        className='photo-our-team'
                                        alt="photo-our-team"
                                        src={"/tech-img/MongoDB.svg"}
                                        quality={100}
                                        fill
                                        sizes="(max-width: 100%)"
                                        style={{
                                            objectFit: 'contain',
                                            width: '100%',

                                        }}>
                                    </Image>
                                </div>
                                <p className='tech-title'>Mongo DB Atlas</p>
                            </div>
                            <div className="tech-container">
                                <div className='tech-image-container'>
                                    <Image
                                        className='photo-our-team'
                                        alt="photo-our-team"
                                        src={"/tech-img/firebase-svgrepo-com.svg"}
                                        quality={100}
                                        fill
                                        sizes="(max-width: 100%)"
                                        style={{
                                            objectFit: 'contain',
                                            width: '100%',

                                        }}>
                                    </Image>
                                </div>
                                <p className='tech-title'>Firebase</p>
                            </div>
                        </div>
                    </div>
                    <div className="player-wrapper">
                        <ReactPlayer
                            ref={playerRef}
                            className="react-player"
                            url='https://www.youtube.com/watch?v=xIoQge7kuT0'
                            controls
                            style={{ controls: 'none' }}
                        />
                    </div>
                </div>
                <Footer />
            </div>
        </>

    )
}