import Image from 'next/image';
import Link from 'next/link';
import formattedPrice from '../FormattedPrice/FormattedPrice';
import React from 'react';


function GoodCardSmall({ props }) {
    // console.log(props)
    const { id, photo_preview, name, price, available, category_id, sub_category_id, title, images, image } = props;



    return (
        <Link key={props.id}
            href="/[category]/[subcategory]/[id]" as={`/${id}/${title}/${id}`}
            className="top-sellers-item">
            <div className="image-container-top-sellers">
                <div className="container-for-imafe-top-sellers">
                    <Image
                        alt="image of good"
                        // src={photo_preview ? photo_preview : (props.images[1] ? props.images[1] : "/promotionsImage/headphones.png")}
                        src={photo_preview ? photo_preview : (props.images && props.images.length > 1 ? images[0] : (props.image ? props.image : '/defaultPhoto.png'))}
                        quality={100}
                        fill
                        sizes="(max-width: 100%)"
                        style={{
                            objectFit: 'contain',
                            width: '100%'
                        }}
                    />
                </div>
            </div>
            {/* <p className='top-sellers-item-title'>{name}</p> */}
            <p className='top-sellers-item-title'>{title}</p>
            <div className='top-sellers-prise-and-availability'>
                <p className='top-sellers-price'>{formattedPrice(price)} грн</p>
                {/* <p className='top-sellers-price'>{price} грн</p> */}
                {/* <p className={`top-sellers-availability ${available ? '' : 'noavailability'}`}> */}
                <p className={`top-sellers-availability ${id !== undefined ? '' : 'noavailability'}`}>
                    {/* {available === true ? "Є в наявності" : "Немає в наявності"} */}
                    {id !== undefined ? "Є в наявності" : "Немає в наявності"}
                </p>
            </div>
        </Link>
    );
};

export default React.memo(GoodCardSmall);
