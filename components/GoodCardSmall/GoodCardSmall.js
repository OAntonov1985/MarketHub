import Image from 'next/image';
import Link from 'next/link';
import formattedPrice from '../HelperFunctions/FormattedPrice';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setUserBasket } from '@/slices/userSlice';




function GoodCardSmall({ props }) {
    const { id, photo_preview, name, price, available, category_id, sub_category_id, title, images, image, thumbnail } = props;
    const [isInBaslet, setIsInBasket] = useState(false);
    const dispatch = useDispatch();

    const { userBasket } = useSelector((state) => state.user);
    // console.log(userBasket)

    useEffect(() => {
        const arrayIndex = userBasket.findIndex(item => {
            return item.id === id
        })
        if (arrayIndex !== -1) {
            setIsInBasket(true)
        }
    }, [userBasket])


    function addToBasket(e) {
        e.preventDefault();
        dispatch(setUserBasket(
            {
                id: id,
                title: title,
                price: price,
                thumbnail: images[0],
                number: 1,
                totalPrice: price
            }
        ))
    };

    return (
        <Link key={props.id}
            href="/[category]/[subcategory]/[id]" as={`/${id}/${title}/${id}`}
            className="top-sellers-item" >
            <div className="image-container-top-sellers">
                <div className='container-for-icon-favorite' id={id}
                >
                    <Image
                        id={props.id}
                        onClick={addToBasket}
                        className='favorite-icon'
                        alt="icon of favorite"
                        src="/heardincart.svg"
                        quality={100}
                        fill
                        sizes="(max-width: 100%)"
                        style={{
                            objectFit: 'contain',
                            width: '100%'
                        }}>
                    </Image>
                </div>
                <div className='container-for-icon-add-to-basket' id={id} onClick={addToBasket}>
                    <Image
                        id={id}
                        className='basket-icon'
                        alt="icon of basket"
                        src={isInBaslet === false ? "/basketincard.svg" : "/goodInBasket.svg"}
                        quality={100}
                        fill
                        sizes="(max-width: 100%)"
                        style={{
                            objectFit: 'contain',
                            width: '100%'
                        }}>
                    </Image>
                </div>
                <div className="container-for-imafe-top-sellers">
                    <Image
                        alt="image of good"
                        src={thumbnail}
                        // src={photo_preview ? photo_preview : (props.images && props.images.length > 1 ? images[0] : (props.image ? props.image : '/defaultPhoto.png'))}
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

                <p className={`top-sellers-availability ${available == true ? '' : 'noavailability'}`}>

                    {available == true ? "Є в наявності" : "Немає в наявності"}
                </p>
            </div>
        </Link >
    );
};

export default React.memo(GoodCardSmall);
