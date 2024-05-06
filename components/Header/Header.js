"use client";

import React from 'react';
import Cookies from 'js-cookie';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { totalGoods, setTotalPriseInAllBasket, setInitialBasket, setUserName, setinitialFavorite, setTotalFavorite, setSearchPearchPhrase, setSearchActive, setSearchTotalResult } from '@/slices/userSlice';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import GetSearchResult from '@/pages/api/GetSearchResult';
import formattedPrice from '../HelperFunctions/FormattedPrice';




function Header({ transparentBackground }) {

    const [headerName, setHeaderName] = useState('');
    const [isVisible, setIsVisible] = useState("quantityOfGoods is-wisible");
    const [isVisibleFavorite, setIsVisibleFavorite] = useState("quantityOfFavorite is-wisible");
    const [userPath, setUserPath] = useState("/loginpage");
    const [searchText, setSearchText] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const [isVisibleSearchResult, setIsVisibleSearchResult] = useState(false);

    const dispatch = useDispatch();
    const { quantityOfGoods } = useSelector((state) => state.user);
    const { userBasket } = useSelector((state) => state.user);
    const { userFavorite } = useSelector((state) => state.user);
    const { quantityOfFavorite } = useSelector((state) => state.user);
    const { total } = useSelector((state) => state.user);
    let { userName } = useSelector((state) => state.user);

    const pathname = usePathname();
    const router = useRouter();
    const userNameCookie = userName = Cookies.get('userName');



    useEffect(() => {
        if (pathname === "/userpage") {
            if (!userNameCookie) {
                router.push('/loginpage');
            }
        }
    }, [userNameCookie]);

    useEffect(() => {

        const userBasketInLocal = localStorage.getItem("BASKET");

        if (userBasketInLocal && userBasket.length === 0) {
            const userBasket = JSON.parse(userBasketInLocal);
            dispatch(setInitialBasket(userBasket));

            const newTotalGoods = userBasket.reduce((accum, item) => accum = accum + item.number, 0);
            dispatch(totalGoods(newTotalGoods));
            localStorage.setItem('totalGoods', newTotalGoods);

            const newTotalPriseInAllBasket = userBasket.reduce((accum, item) => accum = accum + (item.price * item.number), 0);
            dispatch(setTotalPriseInAllBasket(newTotalPriseInAllBasket));
            localStorage.setItem('totalPriseInAllBasket', newTotalPriseInAllBasket);

        };

        const userFavoriteInLocal = localStorage.getItem("FAVORITE");
        if (userFavoriteInLocal && userFavorite.length === 0) {
            const userFavorite = JSON.parse(userFavoriteInLocal);
            dispatch(setinitialFavorite(userFavorite));
        }

        const userTotalFavoriteInLocal = localStorage.getItem("totalFavorite");
        if (userTotalFavoriteInLocal) {
            const userFavorite = JSON.parse(userFavoriteInLocal);
            dispatch(setTotalFavorite(userFavorite.length));
        }

        userName = Cookies.get('userName');
    }, []);



    useEffect(() => {
        if (userName) {
            dispatch(setUserName(userName));
            setHeaderName(<div className='header-user-name'>Привіт, {userName}!</div>);
            setUserPath("/userpage");
        }
        else if (userName === undefined) {
            dispatch(setUserName(''));
            setHeaderName(null);
            setUserPath("/loginpage");
        }
    }, [userName]);


    useEffect(() => {
        if (quantityOfGoods === 0 || quantityOfGoods === null) {
            setIsVisible("quantityOfGoods  is-wisible");
        }
        else {
            setIsVisible("quantityOfGoods");
        }

        if (quantityOfFavorite === 0 || quantityOfFavorite === null) {
            setIsVisibleFavorite("quantityOfFavorite  is-wisible");
        }
        else {
            setIsVisibleFavorite("quantityOfFavorite");
        }
    }, [quantityOfGoods, quantityOfFavorite])



    async function searchingFunction(event) {
        setSearchText(event.target.value);
        dispatch(setSearchPearchPhrase(event.target.value));

        if (event.target.value.length >= 1) {
            try {
                const result = await GetSearchResult(event.target.value);
                setSearchResult(result.result.data.slice(0, 10));
                dispatch(setSearchTotalResult(result.result.total));

                if (result.result.data.length > 0) {
                    setIsVisibleSearchResult(true);
                } else setIsVisibleSearchResult(false);

            } catch (error) {
                alert('Упс.... Щось пішло не так. зверніться до розробників');
            }
        }
        else if (event.target.value.length === 0) {
            setSearchResult([]);
            setIsVisibleSearchResult(false);
        }
    }


    useEffect(() => {
        const handleClickOutside = (event) => {
            const isSearchHeaderClicked = event.target.closest('.search-results-header');
            const isInputFieldClicked = event.target.closest('.header-input-field');

            if (!isSearchHeaderClicked && !isInputFieldClicked) {
                setIsVisibleSearchResult(false);
            }
        };

        window.addEventListener('click', handleClickOutside);

        return () => {
            window.removeEventListener('click', handleClickOutside);
        };
    }, []);



    return (
        <div className='header-component' style={{ backgroundColor: transparentBackground ? 'transparent' : '#010101' }}>
            <Link href={"/"}>
                <Image
                    alt="logo image in header component"
                    src='/logoheaderinmainpage.svg'
                    sizes="(max-width: 100%)"
                    quality={100}
                    width={110}
                    height={56}
                    className='logo-image'
                    priority
                />
            </Link>

            <div className='header-search-field'>
                <input
                    type="text"
                    className='header-input-field'
                    value={searchText}
                    onChange={searchingFunction}
                    placeholder='Я шукаю ...'
                    onKeyDown={(event) => (event.key === 'Enter' && searchText.length !== 0) ?
                        (dispatch(setSearchActive()), setIsVisibleSearchResult(false), router.push("/searchresultpage")) : null}
                    onClick={() => searchResult.length > 0 ? setIsVisibleSearchResult(true) : null}
                />
                <Image
                    alt="logo image search in input field"
                    src='/iconserach.svg'
                    href={"/searchresultpage"}
                    sizes="(max-width: 100%)"
                    quality={100}
                    width={18}
                    height={18}
                    className='search-input-field'
                    priority
                    onClick={() => (dispatch(setSearchActive()), router.push("/searchresultpage"))}
                />
            </div>
            <div></div>
            <div className={`search-results-header ${isVisibleSearchResult ? "" : "is-wisible"}`} >
                {searchResult.map((item, index) => {
                    return (
                        <Link href={`/${item.category_details.name}/${item.sub_category_detail.name}/${item.id}`}
                            className='result-item' key={item.id}>
                            <div className='item-image-container'>
                                <Image
                                    alt="image of good"
                                    src={item.thumbnail}
                                    sizes="(max-width: 100%)"
                                    quality={40}
                                    width={80}
                                    height={80}
                                    className='image-of-good-in-search'
                                    priority
                                />
                            </div>
                            <div className='item-content-container'>
                                <div className='search-result search-title'>{item.title.split(' ').length > 5 ? (item.title[5][0] == '(' || item.title[5][0] == '/' ? item.title.split(' ').slice(0, 4).join(' ') : item.title.split(' ').slice(0, 5).join(' ')) : item.title}</div>
                                <div className='order-date search-id'>{item.id}</div>
                                <div className='search-result search-price'>{formattedPrice(item.price)} грн</div>
                            </div>
                        </Link>
                    )
                })}
                <Link href={"/searchresultpage"}
                    className='search-result search-total'
                    onClick={() => (dispatch(setSearchActive()), setIsVisibleSearchResult(false))}
                >Подивитись всі результати: {total}</Link>
            </div>
            <div className='header-icons'>
                {headerName}
                <Link href={userPath}>
                    <Image
                        alt="logo image client"
                        src='/clienticon.svg'
                        quality={100}
                        width={24}
                        height={24}
                        sizes="(max-width: 100%)"
                        title='Перейти в особистий кабінет'
                        className='logo-image-client'
                        priority
                    />
                </Link>
                <Link href="/basket/" className="logo-image-basket">
                    <Image
                        alt="logo image basket"
                        src="/basket.svg"
                        sizes="(max-width: 100%)"
                        quality={100}
                        width={24}
                        height={24}
                        className='photo-image-basket'
                        priority
                    />
                </Link>
                <div className={isVisible}>{quantityOfGoods}</div>
                <Link href="/favorite/" className="logo-image-favorite">
                    <Image
                        alt="logo image favorite"
                        src="/heardinheader.png"
                        sizes="(max-width: 100%)"
                        quality={100}
                        width={24}
                        height={24}
                        className='logo-image-favorite'
                        priority
                    />
                </Link>
                <div className={isVisibleFavorite}>{quantityOfFavorite}</div>
                <Link href="/about/" className="logo-image-about">
                    <Image
                        alt="logo image about us"
                        src="/about.svg"
                        sizes="(max-width: 100%)"
                        quality={100}
                        width={30}
                        height={30}
                        className='logo-image-about'
                        priority
                    />
                </Link>
            </div>
        </div>
    );
};

export default React.memo(Header)
