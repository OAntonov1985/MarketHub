import Image from 'next/image';

export default function Categories() {
    return (
        <>
            <div className="first-row">
                <div className="comp">
                    <div className="image-container">
                        <Image
                            alt="image of computer"
                            src='/ItemImage/comp.png'
                            quality={100}
                            fill
                            style={{
                                objectFit: 'contain',
                                width: '100%'

                            }}
                        />
                    </div>
                    <p className='main-item-title'>Комп’ютерна техніка</p>
                </div>
                <div className="phones">
                    <div className="image-container">
                        <Image
                            alt="image of computer"
                            src='/ItemImage/pfones.png'
                            quality={100}
                            fill
                            style={{
                                objectFit: 'contain',
                                width: '100%'

                            }}
                        />
                    </div>
                    <p className='main-item-title'>Мобільні телефони</p>
                </div>
            </div>
            <div className="second-row">
                <div className="refs">
                    <div className="image-container">
                        <Image
                            alt="image of computer"
                            src='/ItemImage/refs.png'
                            quality={100}
                            fill
                            style={{
                                objectFit: 'contain',
                                width: '100%'

                            }}
                        />
                    </div>
                    <p className='main-item-title'>Побутова техніка</p>
                </div>
                <div className="games">
                    <div className="image-container">
                        <Image
                            alt="image of computer"
                            src='/ItemImage/games.png'
                            quality={100}
                            fill
                            style={{
                                objectFit: 'contain',
                                width: '100%'

                            }}
                        />
                    </div>
                    <p className='main-item-title'>Ігрові приставки</p>
                </div>
                <div className="headphones">
                    <div className="image-container">
                        <Image
                            alt="image of computer"
                            src='/ItemImage/headphones.png'
                            quality={100}
                            fill
                            style={{
                                objectFit: 'contain',
                                width: '100%'
                            }}
                        />
                    </div>
                    <p className='main-item-title'>Аудіотехніка</p>
                </div>
            </div>
        </>
    );
};