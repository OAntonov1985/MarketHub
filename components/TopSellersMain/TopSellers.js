import Image from 'next/image';

export default function TopSellers() {
    return (
        <>
            <h4 className='top-sellers-title title'>Топ продажів</h4>
            <div className="top-sellers-row">
                <div className="top-sellers-item">
                    <div className="image-container-top-sellers">
                        <Image
                            alt="image of computer"
                            src='/topSellersImage/comp.png'
                            quality={100}
                            width={269}
                            height={176}
                        />
                    </div>
                    <p className='top-sellers-item-title'>Ноутбук LENOVO IdeaPad 3</p>
                    <div className='top-sellers-prise-and-availability'>
                        <p className='top-sellers-price'>29 999 грн</p>
                        <p className='top-sellers-availability'>Є в наявності</p>
                    </div>
                </div>
                <div className="top-sellers-item">
                    <div className="image-container-top-sellers">
                        <Image
                            alt="image of computer"
                            src='/topSellersImage/comp2.png'
                            quality={100}
                            width={269}
                            height={176}
                        />
                    </div>
                    <p className='top-sellers-item-title'>Ноутбук Asus Vivobook 15</p>
                    <div className='top-sellers-prise-and-availability'>
                        <p className='top-sellers-price'>17 499 грн</p>
                        <p className='top-sellers-availability noavailability'>Немає в наявності</p>
                    </div>
                </div>
                <div className="top-sellers-item">
                    <div className="image-container-top-sellers">
                        <Image
                            alt="image of computer"
                            src='/topSellersImage/game.png'
                            quality={100}
                            width={269}
                            height={176}
                        />
                    </div>
                    <p className='top-sellers-item-title'>Ігрова приставка Play Station 5</p>
                    <div className='top-sellers-prise-and-availability'>
                        <p className='top-sellers-price'>23 499 грн</p>
                        <p className='top-sellers-availability'>Є в  наявності</p>
                    </div>
                </div>
                <div className="top-sellers-item">
                    <div className="image-container-top-sellers">
                        <Image
                            alt="image of computer"
                            src='/topSellersImage/ref.png'
                            quality={100}
                            width={269}
                            height={176}
                        />
                    </div>
                    <p className='top-sellers-item-title'>Холодильник Samsung RB34C675DSA</p>
                    <div className='top-sellers-prise-and-availability'>
                        <p className='top-sellers-price'>24 799 грн</p>
                        <p className='top-sellers-availability'>Є в наявності</p>
                    </div>
                </div>
            </div>
        </>
    )
}