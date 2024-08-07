import Image from 'next/image';
import Link from 'next/link';
import formattedPrice from '../HelperFunctions/FormattedPrice';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setActiveSubItemInGood, setGoodToEdit } from '@/slices/userSlice';
import ArrowComponent from './ArrowComponent';



export default function GoodsListFlex({ userGoodsToSale, activeItem, setActiveItem, deleteGood, changeGoodAvability }) {
    const dispatch = useDispatch();
    const { activeSubItemInGood } = useSelector((state) => state.user);
    const { renderInfo } = useSelector((state) => state.user);
    // userGoodsList
    useEffect(() => {
        const handleClickOutside = (event) => {
            const isEditMenuClicked = event.target.classList.contains('order-info-points-container');

            if (!isEditMenuClicked) {
                const editMenus = document.querySelectorAll('.show-edit-menu');
                editMenus.forEach(menu => menu.classList.remove('show-edit-menu'));
            }
        };

        window.addEventListener('click', handleClickOutside);

        return () => {
            window.removeEventListener('click', handleClickOutside);
        };
    }, []);


    function pushToEditGood(event) {
        dispatch(setActiveSubItemInGood("Додати товар"));
        dispatch(setGoodToEdit(event.target.id));
    };

    const toggleEditMenu = (itemId) => {
        const editMenu = document.getElementById(itemId);
        if (editMenu) {
            editMenu.classList.toggle('show-edit-menu');
        }
        setActiveItem(itemId === activeItem ? null : itemId);
    };

    return (
        <div className={`right-culumn-user-orders-container goods-list-flex `}>
            <ArrowComponent title={activeSubItemInGood} />
            <ul className='orders-list-flex'>
                {userGoodsToSale.map((item, index) => (
                    <li className='order-item-in-userpage' key={index}>
                        <div className='order-left-column'>
                            <div className='order-left-column-order-number'>№{item.id}</div>
                            <div className='order-left-column-order-img-container'>
                                <Link
                                    href={`/${item.category_details.name}/${item.sub_category_detail.name}/${item.good_id}`}
                                    className='good-photo-inuserpage'>
                                    <Image
                                        alt="image of good"
                                        src={item.thumbnail ? item.thumbnail : "/defaultPhoto.png"}
                                        quality={100}
                                        fill
                                        style={{
                                            objectFit: 'contain'
                                        }}
                                    />
                                </Link>
                            </div>
                        </div>
                        <div className='order-central-column column-in-goodslist'>
                            <div className='order-central-column-good-title'>Назва товару:</div>
                            <div className='order-central-column-good-name'>
                                {item.title.length > 20 ? item.title.slice(0, 20) + "..." : item.title}
                            </div>
                            <div> {formattedPrice(item.price)}  грн</div>
                        </div>
                        <div className='order-right-column'>
                            <div className='order-info-points-container' id={`${item.id} ${item.available}`} onClick={() => toggleEditMenu(item.id)}>
                                <div className='order-info-points'>
                                    <Image
                                        className='logo-of-point'
                                        alt="logo of point"
                                        src="/point.svg"
                                        quality={100}
                                        fill
                                        sizes="(max-width: 100%)"
                                        style={{
                                            objectFit: 'contain',
                                            width: '100%'
                                        }}
                                    />
                                </div>
                                <div className='order-info-points'>
                                    <Image
                                        className='logo-of-point'
                                        alt="logo of point"
                                        src="/point.svg"
                                        quality={100}
                                        fill
                                        sizes="(max-width: 100%)"
                                        style={{
                                            objectFit: 'contain',
                                            width: '100%'
                                        }}
                                    />
                                </div>
                                <div className='order-info-points'>
                                    <Image
                                        className='logo-of-point'
                                        alt="logo of point"
                                        src="/point.svg"
                                        quality={100}
                                        fill
                                        sizes="(max-width: 100%)"
                                        style={{
                                            objectFit: 'contain',
                                            width: '100%'
                                        }}
                                    />
                                </div>
                                <div className={`edit-menu ${activeItem === item.id ? "show-edit-menu" : ""}`} id={item.id}>
                                    <div
                                        id={item.id}
                                        onClick={(event) => changeGoodAvability(event, item.available)}>
                                        {item.available === true ? "Деактивувати" : "Активувати"}
                                    </div>
                                    <div
                                        id={item.id}
                                        onClick={(event) => pushToEditGood(event)}>
                                        Редагувати</div>
                                    <div
                                        id={item.id}
                                        onClick={(event) => deleteGood(event, item.title)}
                                    >Видалити</div>
                                </div>
                            </div>
                            <div className='order-right-column-down-string'>{item.available ? "Товар в продажу" : "Товар  вилучений з продажу"}</div>
                        </div>
                    </li>
                )
                )}
            </ul>
        </div>

    );
}