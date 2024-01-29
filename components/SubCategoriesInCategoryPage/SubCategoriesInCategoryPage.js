import Image from 'next/image'

export default function SubcategoriesInCatPage({ subCategories }) {
    // console.log(subCategories)
    return (
        <div className='second-row'>
            {!!subCategories.length && subCategories.map(subCategories => {
                return (
                    <div key={subCategories.id} className="main-categories-row-two">
                        <div className="image-container">
                            <Image
                                alt="image of computer"
                                src={subCategories.photo_preview}
                                quality={100}
                                fill
                                style={{
                                    objectFit: 'contain',
                                    width: '100%'

                                }}
                            />
                        </div>
                        <p className='main-item-title'>{subCategories.name}</p>
                    </div>
                )
            })}
        </div>
    )
};

