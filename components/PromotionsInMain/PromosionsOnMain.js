import Image from 'next/image'

export default function PromotionsOnMain() {
    return (
        <>
            <h4 className='top-sellers-title title'>Акції</h4>
            <div className="top-sellers-row">
                <div className="top-sellers-item">
                    <div className="image-container-top-sellers">
                        <Image
                            alt="image of computer"
                            src='/promotionsImage/pfone.png'
                            quality={100}
                            width={150}
                            height={204}
                        />
                    </div>
                    <p className='top-sellers-item-title'>Смартфон APPLE iPhone 13 128GB</p>
                    <div className='top-sellers-prise-and-availability'>
                        <p className='top-sellers-price sail-prise'>29 999 грн</p>
                        <p className='top-sellers-availability'>Є в наявності</p>
                    </div>
                </div>
                <div className="top-sellers-item">
                    <div className="image-container-top-sellers">
                        <Image
                            alt="image of computer"
                            src='/promotionsImage/headphones.png'
                            quality={100}
                            width={156}
                            height={202}
                        />
                    </div>
                    <p className='top-sellers-item-title'>Навушники PANASONIC RB-HX220BEE-K</p>
                    <div className='top-sellers-prise-and-availability'>
                        <p className='top-sellers-price sail-prise'>17 499 грн</p>
                        <p className='top-sellers-availability'>Є в наявності</p>
                    </div>
                </div>
                <div className="top-sellers-item">
                    <div className="image-container-top-sellers">
                        <Image
                            alt="image of computer"
                            src='/promotionsImage/blender.png'
                            quality={100}
                            width={202}
                            height={202}
                        />
                    </div>
                    <p className='top-sellers-item-title'>Міксер TEFAL Prep’Mix HT450B38</p>
                    <div className='top-sellers-prise-and-availability'>
                        <p className='top-sellers-price sail-prise'>23 499 грн</p>
                        <p className='top-sellers-availability'>Є в  наявності</p>
                    </div>
                </div>
                <div className="top-sellers-item">
                    <div className="image-container-top-sellers">
                        <Image
                            alt="image of computer"
                            src='/promotionsImage/heater.png'
                            quality={100}
                            width={220}
                            height={146}
                        />
                    </div>
                    <p className='top-sellers-item-title'>Обігрівач WetAit WQH-2020</p>
                    <div className='top-sellers-prise-and-availability'>
                        <p className='top-sellers-price sail-prise'>24 799 грн</p>
                        <p className='top-sellers-availability'>Є в наявності</p>
                    </div>
                </div>
            </div>
        </>
    )
}