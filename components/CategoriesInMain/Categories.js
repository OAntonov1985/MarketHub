import Image from 'next/image';

export default function Categories() {
    return (
        <>
            <div className="first-row">
                <div className="comp">
                    <Image
                        alt="image of computer"
                        src='/ItemImage/comp.png'
                        quality={100}
                        width={320}
                        height={300}
                    />
                    <p className='main-item-title'>Комп’ютерна техніка</p>
                </div>
                <div className="phones">
                    <Image
                        alt="image of computer"
                        src='/ItemImage/pfones.png'
                        quality={100}
                        width={420}
                        height={300}
                    />
                    <p className='main-item-title'>Мобільні телефони</p>
                </div>
            </div>
            <div className="second-row">
                <div className="refs">
                    <Image
                        alt="image of computer"
                        src='/ItemImage/refs.png'
                        quality={100}
                        width={402}
                        height={270}
                    />
                    <p className='main-item-title'>Побутова техніка</p>
                </div>
                <div className="games">
                    <Image
                        alt="image of computer"
                        src='/ItemImage/games.png'
                        quality={100}
                        width={293}
                        height={270}
                    />
                    <p className='main-item-title'>Ігрові приставки</p>
                </div>
                <div className="headphones">
                    <Image
                        alt="image of computer"
                        src='/ItemImage/headphones.png'
                        quality={100}
                        width={270}
                        height={270}
                    />
                    <p className='main-item-title'>Аудіотехніка</p>
                </div>
            </div>
        </>
    );
};