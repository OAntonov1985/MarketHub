import Image from 'next/image';
import Link from 'next/link';

function Categories({ categories, id }) {
    // console.log(id)
    return (
        <>
            <div className='first-row' >
                {!!categories.length && categories.slice(0, 2).map(categories => {
                    return (
                        <Link href={categories.name.toLowerCase()} key={categories.id} id={categories.id} className="main-categories-row-one">
                            <div className="image-container">
                                <Image
                                    alt="image of computer"
                                    src={categories.photo_preview}
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
                })};
            </div>
            <div className='second-row'>
                {!!categories.length && categories.slice(2, 5).map(categories => {
                    return (
                        <Link href={categories.name.toLowerCase()} key={categories.id} id={categories.id} className="main-categories-row-two">
                            <div className="image-container">
                                <Image
                                    alt="image of computer"
                                    src={categories.photo_preview}
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
                })};
            </div>
        </>
    );
};
export default Categories;