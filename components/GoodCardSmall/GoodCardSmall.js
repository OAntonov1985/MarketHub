import Image from 'next/image';
import Link from 'next/link';
import formattedPrice from '../HelperFunctions/FormattedPrice';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setUserBasket, setUserFavorite } from '@/slices/userSlice';
import { useRouter } from 'next/router';




function GoodCardSmall({ props, isFavorite }) {

    const { id, price, available, title, images, thumbnail, category_details, sub_category_detail, seller_id } = props;
    const [isInBaslet, setIsInBasket] = useState(false);
    const [isInFavorite, setIsInFavorite] = useState(false);
    const [className, setClassname] = useState(false)
    const dispatch = useDispatch();
    const [imgSrc, setImgSrc] = useState(thumbnail ? thumbnail : "/defaultPhoto.png");
    // console.log(sub_category_detail)


    const router = useRouter();
    const categoryName = router.query.category;
    const subCategoryName = router.query.subcategory;
    // console.log(categoryName)
    // console.log(subCategoryName)



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
                    seller_id: seller_id,
                    totalPrice: price
                }
            ))
        }
    };

    function addToFavorite(e) {
        e.preventDefault();
        dispatch(setUserFavorite(
            {
                id: id,
                title: title,
                price: price,
                thumbnail: (thumbnail ? thumbnail : images[0]),
                available: available,
                seller_id: seller_id,
                category_details: category_details,
                sub_category_detail: sub_category_detail
            }
        ))
    }

    return (
        <Link key={id}
            href="/[category]/[subcategory]/[title]" as={`/${category_details ? category_details.name : null}/${sub_category_detail ? sub_category_detail.name : null}/${id}`}
            className={className ? "top-sellers-item" : "top-sellers-item top-sellers-in-favorite"} >
            <div className="image-container-top-sellers">
                <div className={`container-for-icon-favorite`} id={id}>
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
                <div className='container-for-icon-add-to-basket' id={id} >
                    <Image
                        id={id}
                        onClick={addToBasket}
                        className='basket-icon'
                        alt="icon of basket"
                        src={available === false ? "/noavalablegoodicon.svg" : (isInBaslet === false ? "/basketincard.svg" : "/goodInBasket.svg")}
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
                        src={imgSrc}
                        quality={30}
                        fill
                        sizes="(max-width: 100%)"
                        onError={() => setImgSrc("/defaultPhoto.png")}
                        style={{
                            objectFit: 'contain',
                            width: '100%'
                        }}
                    />
                </div>
            </div>
            <p className='top-sellers-item-title'>{title.split(' ').length > 5 ? (title[5][0] == '(' || title[5][0] == '/' ? title.split(' ').slice(0, 4).join(' ') : title.split(' ').slice(0, 5).join(' ')) : title}</p>
            <div className='top-sellers-prise-and-availability'>
                <p className='top-sellers-price'>{formattedPrice(price)} грн</p>
                <p className={`top-sellers-availability ${available == true ? '' : 'noavailability'}`}>
                    {available == true ? "Є в наявності" : "Немає в наявності"}
                </p>
            </div>
        </Link >
    );
};

export default React.memo(GoodCardSmall);
