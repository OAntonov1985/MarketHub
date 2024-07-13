import React from 'react';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';


export default function About() {
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
                        <h4 className='about-title'> Технології, які використані на даному проекті:</h4>
                        <ul className='tech-list'>
                            <li className='tech-list-li'>NextJS</li>
                            <li className='tech-list-li'>NextAuth</li>
                            <li className='tech-list-li'>Redux Toolkit</li>
                            <li className='tech-list-li'>Інтеграція API Нової пошти для вибору міст і відділень.</li>
                            <li className='tech-list-li'>Деплой на портал Versel.</li>
                            <li className='tech-list-li'>Experss JS</li>
                            <li className='tech-list-li'>Mongodb Atlas</li>
                            <li className='tech-list-li'>Firebase</li>
                        </ul>
                    </div>

                </div>
                <Footer />
            </div>
        </>

    )
}