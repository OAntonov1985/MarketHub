import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function CategoriesOnMain({ categories }) {

    return (
        <>
            <div className='first-row' >
                {!!categories.length && categories.slice(0, 2).map(categories => {
                    return (
                        <Link href={categories.name} key={categories.id} id={categories.id} className="main-categories-row-one">
                            <div className="image-container">
                                <Image
                                    className='img-title'
                                    alt={`image of ${categories.name}`}
                                    src={categories.photo_preview}
                                    sizes="(max-width: 100%)"
                                    quality={100}
                                    fill
                                    style={{
                                        objectFit: 'contain',
                                        width: '100%'

                                    }}
                                />
                            </div>
                            <p className='main-item-title'>{categories.name}</p>
                        </Link>
                    );
                })}
            </div>
            <div className='second-row'>
                {!!categories.length && categories.slice(2, 5).map(categories => {
                    return (
                        <Link href={categories.name} key={categories.id} id={categories.id} className="main-categories-row-two">
                            <div className="image-container">
                                <Image
                                    alt={`image of ${categories.name}`}
                                    src={categories.photo_preview}
                                    quality={100}
                                    sizes="(max-width: 100%)"
                                    fill
                                    style={{
                                        objectFit: 'contain',
                                        width: '100%'

                                    }}
                                />
                            </div>
                            <p className='main-item-title'>{categories.name}</p>
                        </Link>
                    );
                })}
            </div>
        </>
    );
};
export default React.memo(CategoriesOnMain);