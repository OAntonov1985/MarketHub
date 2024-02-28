import Image from 'next/image';
import Link from 'next/link';
import formattedPrice from '../HelperFunctions/FormattedPrice';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setUserBasket, setUserFavorite } from '@/slices/userSlice';
import { useRouter } from 'next/router';




function GoodCardSmall({ props, isFavorite }) {
    const { id, price, available, title, images, thumbnail } = props;
    const [isInBaslet, setIsInBasket] = useState(false);
    const [isInFavorite, setIsInFavorite] = useState(false);
    const [className, setClassname] = useState(false)
    const dispatch = useDispatch();


    const router = useRouter();
    const categoryName = router.query.category;
    const subCategoryName = router.query.subcategory;



    const { userBasket } = useSelector((state) => state.user);
    const { userFavorite } = useSelector((state) => state.user);

    useEffect(() => {
        const arrayIndex = userBasket.findIndex(item => {
            return item.id === id
        })
        if (arrayIndex !== -1) {
            setIsInBasket(true)
        }

        const arrayIndexFavorite = userFavorite.findIndex(item => {
            return item.id === id
        })
        if (arrayIndexFavorite !== -1) setIsInFavorite(true);
        else setIsInFavorite(false)
    }, [userBasket, userFavorite])

    useEffect(() => {
        if (isFavorite) setIsInFavorite(true);

        if (isFavorite) setClassname(false);
        else setClassname(true);
    }, [isFavorite, className])


    function addToBasket(e) {
        e.preventDefault();
        if (available === true) {
            dispatch(setUserBasket(
                {
                    id: id,
                    title: title,
                    price: price,
                    thumbnail: (thumbnail ? thumbnail : images[0]),
                    number: 1,
                    totalPrice: price
                }
            ))
        }
    };

    function addToFavorite(e) {
        e.preventDefault();
        console.log
        dispatch(setUserFavorite(
            {
                id: id,
                title: title,
                price: price,
                thumbnail: (thumbnail ? thumbnail : images[0]),
                available: available
            }
        ))
    }

    return (
        <Link key={props.title}
            href="/[category]/[subcategory]/[id]" as={`/${categoryName}/${subCategoryName}/${title}`}
            className={className ? "top-sellers-item" : "top-sellers-item top-sellers-in-favorite"} >
            <div className="image-container-top-sellers">
                <div className={`container-for-icon-favorite ${isFavorite ? 'icon-in-favorite' : ''}`} id={id}>
                    <Image
                        id={props.id}
                        onClick={addToFavorite}
                        className='favorite-icon'
                        alt="icon of favorite"
                        src={!isInFavorite ? "/heardincart.svg" : "addedtofavoriteicon.svg"}
                        quality={100}
                        fill
                        sizes="(max-width: 100%)"
                        style={{
                            objectFit: 'contain',
                            width: '100%'
                        }}>
                    </Image>
                </div>
                {isFavorite === true ? null :
                    <div className='container-for-icon-add-to-basket' id={id} >
                        <Image
                            id={id}
                            onClick={addToBasket}
                            className='basket-icon'
                            alt="icon of basket"
                            src={available === false ? "/noavalablegoodicon.svg" : (isInBaslet === false ? "/basketincard.svg" : "/goodInBasket.svg")}
                            // src={isInBaslet === false ? "/basketincard.svg" : "/goodInBasket.svg"} 
                            quality={100}
                            fill
                            sizes="(max-width: 100%)"
                            style={{
                                objectFit: 'contain',
                                width: '100%'
                            }}>
                        </Image>
                    </div>}
                <div className="container-for-imafe-top-sellers">
                    <Image
                        alt="image of good"
                        src={thumbnail}
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
