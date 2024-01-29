import Image from 'next/image';
import Link from 'next/link';

export default function GoodCardSmall({ props }) {
    const { id, photo_preview, name, price, available, category_id, sub_category_id } = props;

    return (
        <>
            <Link
                href="/[name]/[id]" as={`/${sub_category_id}/${id}`}
                key={id} className="top-sellers-item">
                <div className="image-container-top-sellers">
                    <div className="container-for-imafe-top-sellers">
                        <Image
                            alt="image of good"
                            src={photo_preview}
                            quality={100}
                            fill
                            style={{
                                objectFit: 'contain',
                                width: '100%'

                            }}
                        />
                    </div>
                </div>
                <p className='top-sellers-item-title'>{name}</p>
                <div className='top-sellers-prise-and-availability'>
                    <p className='top-sellers-price'>{price}</p>
                    <p className={`top-sellers-availability ${available ? '' : 'noavailability'}`}>
                        {available === true ? "Є в наявності" : "Немає в наявності"}
                    </p>
                </div>
            </Link>
        </>
    );
};