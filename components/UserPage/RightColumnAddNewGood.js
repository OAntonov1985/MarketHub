import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PhotoUploader from './PhotoUploader';
import Cookies from 'js-cookie';
import GetGoodByID from '@/pages/api/GetGoodByID';
import { setActiveSpinner, setGoodToEdit, setRenderInfo } from '@/slices/userSlice';
import { Computers, Phones, Household, GameConsoles, Audio, Categories } from '../Constants';
import AddNewGood from '@/pages/api/AddNewGood';
import { useRouter } from 'next/router';
import { uploadImagesToStorage } from '@/pages/api/DownloadImages';
import Image from 'next/image';




function RightColumnAddNewGood() {
    const [productName, setProductName] = useState(''); // назва продукту
    const [productBrend, setProductBrend] = useState(''); // назва бренду продукту
    const [subCaregorySelest, setSubCaregorySelest] = useState(Computers); // субкатегорія для рендерінгу селекту
    const [categoryValue, setCategoryValue] = useState(Categories[0].name); // назва категорії
    const [subCaregoryValue, setSubCaregoryValue] = useState(Computers[0].name); // назва субкатегорії

    const [goodSaved, setGoodSaved] = useState(null);

    const [categoryInfo, setCategoryInfo] = useState({
        id: "100",
        name: "Комп’ютерна техніка"
    }); // інфо для створення нового товару (категорія)

    const [subCategoryInfo, setSubCategoryInfo] = useState({
        id: subCaregorySelest[0].id.toString(),
        name: subCaregorySelest[0].name
    }); // інфо для створення нового товару (субкатегорія)

    const [productPrice, setProductPrice] = useState(''); // ціна товару 
    const [productDescription, setProductDescription] = useState(''); // опис товару 
    const [newGoodId, setNewGoodId] = useState(''); // опис товару 
    const [isModalOpen, setIsModalOpen] = useState(false); // чи відкрита модалка
    const { pfotoArrayLength } = useSelector((state) => state.user); // довжина фото масиву
    const [pfotosArray, setPhotosArray] = useState(Array.from({ length: pfotoArrayLength }, () => null)); // масив фото

    const { goodToEdit } = useSelector((state) => state.user);  //товар для редагування


    const dispatch = useDispatch();
    const router = useRouter();
    const userID = parseInt(Cookies.get('userID'));


    const fetchData = async () => {
        dispatch(setActiveSpinner(true));
        try {
            const result = await GetGoodByID(goodToEdit);
            setGoodSaved(result.result);
            setProductName(result.result.title);
            setProductPrice(result.result.price);
            setProductBrend(result.result.brend);
            setCategoryValue(result.result.category_details.name);

            if (result.result.category_details.id == "100") setSubCaregorySelest(Computers)
            else if (result.result.category_details.id == "200") setSubCaregorySelest(Phones)
            else if (result.result.category_details.id == "300") setSubCaregorySelest(Household)
            else if (result.result.category_details.id == "400") setSubCaregorySelest(GameConsoles)
            else if (result.result.category_details.id == "500") setSubCaregorySelest(Audio)

            setCategoryInfo({
                id: result.result.category_details.id,
                name: result.result.category_details.name
            });

            setSubCategoryInfo({
                id: result.result.sub_category_detail.id,
                name: result.result.sub_category_detail.name
            })

            setSubCaregoryValue(result.result.sub_category_detail.name);
            setProductDescription(result.result.description);
            setPhotosArray([result.result.thumbnail, ...result.result.images])
            dispatch(setActiveSpinner(false));
            dispatch(setGoodToEdit(''));
        } catch (error) {
            alert('Упс.... Щось пішло не так. зверніться до розробників');
        }
    };

    useEffect(() => {
        if (goodToEdit) {
            fetchData();
        };
    }, [goodToEdit])

    async function handleSubmit(e) {
        e.preventDefault();

        if (goodSaved === null) {

            const testArr = pfotosArray.filter(item => item !== null);

            if (productBrend.length <= 1) {
                alert("Назва бренду товару має бути більше 2 символів");
            } else if (testArr.length < 4) {
                alert("Мінімальна кількість фото має бути 4");
            } else if (productDescription.length <= 3) {
                alert("Мінімальна довжина опису товару має бути 10 символів");
            } else if (productPrice.length === 0 || productPrice === "0") {
                alert("Введіть корректну вартість товару");
            } else {
                dispatch(setActiveSpinner(true));
                const currentDate = new Date();
                const year = currentDate.getFullYear();
                const month = String(currentDate.getMonth() + 1).padStart(2, '0');
                const day = String(currentDate.getDate()).padStart(2, '0');
                const hours = String(currentDate.getHours()).padStart(2, '0');
                const minutes = String(currentDate.getMinutes()).padStart(2, '0');
                const seconds = String(currentDate.getSeconds()).padStart(2, '0');
                const formattedDate = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;

                const downloadURLs = await uploadImagesToStorage(pfotosArray, productName);
                if (downloadURLs.length > 0) {
                    const formData = {
                        title: productName,
                        price: productPrice,
                        description: productDescription.split(".").map(item => item + "."),
                        thumbnail: downloadURLs[0],
                        images: downloadURLs.splice(1),
                        available: true,
                        brend: productBrend,
                        category_details: categoryInfo,
                        sub_category_detail: subCategoryInfo,
                        seller_id: userID,
                        create_at: formattedDate,
                        how_many_solds: 0
                    }

                    const addNewGoodREsult = await AddNewGood(formData);

                    if (addNewGoodREsult.result.status == "SUCCESS") {
                        setNewGoodId(addNewGoodREsult.result.id);
                        dispatch(setActiveSpinner(false));
                        setIsModalOpen(true);
                        clearAllFields();
                    } else {
                        dispatch(setActiveSpinner(false));
                        alert("При додаванні товару сталася помилка. Зверніться до розробників")
                    }

                } else dispatch(setActiveSpinner(false));
            }
        }
        else {
            // console.log(productName)
            if (goodSaved.title !== productName) {
                console.log(productName)
            }
            if (goodSaved.brend !== productBrend) {
                console.log(productBrend)
            }
            if (goodSaved.price !== productPrice) {
                console.log(productPrice)
            }
            if (goodSaved.category_details.id !== categoryInfo.id || goodSaved.category_details.name !== categoryInfo.name) {
                console.log(categoryInfo)
            }
            if (goodSaved.sub_category_detail.id !== subCategoryInfo.id || goodSaved.sub_category_detail.name !== subCategoryInfo.name) {
                console.log(subCategoryInfo)
            }
            if (!Array.isArray(productDescription)) {
                console.log(productDescription.split('.').map(item => item + "."))
            }
        }
    }


    function clearAllFields() {
        // setIsModalOpen(true);
        setProductName('');
        setProductBrend('');
        setProductPrice('');
        setProductDescription('');
        setSubCaregorySelest(Computers);
        setPhotosArray(Array.from({ length: pfotoArrayLength }, () => null));
        setSubCaregoryValue(Computers[0].name);
    }

    useEffect(() => {
        setSubCategoryInfo({
            id: subCaregorySelest[0].id.toString(),
            name: subCaregorySelest[0].name
        });
    }, [categoryInfo]);

    function CategorySelector(event) {

        if (event.target.selectedOptions[0].id == "100") setSubCaregorySelest(Computers)
        else if (event.target.selectedOptions[0].id == "200") setSubCaregorySelest(Phones)
        else if (event.target.selectedOptions[0].id == "300") setSubCaregorySelest(Household)
        else if (event.target.selectedOptions[0].id == "400") setSubCaregorySelest(GameConsoles)
        else if (event.target.selectedOptions[0].id == "500") setSubCaregorySelest(Audio)
        setCategoryValue(event.target.value);
        setCategoryInfo({
            id: event.target.selectedOptions[0].id,
            name: event.target.selectedOptions[0].value
        });
    }

    function subCategorySelector(event) {
        setSubCaregoryValue(event.target.value);
        setSubCategoryInfo({
            id: event.target.selectedOptions[0].id,
            name: event.target.selectedOptions[0].value
        })
    }

    function pushUserToNewGood() {
        setIsModalOpen(false);
        router.push(`/${categoryInfo.name}/${subCategoryInfo.name}/${newGoodId}`);
    }

    // function ClearForm() {
    //     setProductName('');
    //     setProductBrend("");
    //     setProductPrice('');
    //     setProductDescription("");
    //     setCategoryValue(Categories[0].name);
    //     setSubCaregoryValue(Computers[0].name);
    //     setPhotosArray(Array.from({ length: 4 }))
    // }



    // console.log(productName.length)

    return (
        <>
            <div className='header-container' onClick={() => { dispatch(setRenderInfo("start")); clearAllFields() }}>
                <div className='arrou-image-container'>
                    <Image
                        className='logo-of-point'
                        alt="logo of point"
                        src="/arrow-left.svg"
                        quality={100}
                        fill
                        sizes="(max-width: 100%)"
                        style={{
                            objectFit: 'contain',
                            width: '100%'
                        }}
                    />
                </div>
                <h4 className='user-info-title'>{productName.length > 0 ? "Редагувати товар" : "Додати товар"}</h4>
            </div>
            <form className="add-new-good" onSubmit={handleSubmit}>
                <label htmlFor="product-name" className="product-name-title">
                    Назва товару
                </label>
                <input
                    maxLength={50}
                    name="product-name"
                    id="product-name"
                    className="product-name-form-input"
                    placeholder="Введіть назву товару"
                    value={productName}
                    onChange={(event) => setProductName(event.target.value)}
                />

                <label htmlFor="product-brend" className="product-name-title">
                    Назва бренду
                </label>
                <input
                    minLength={3}
                    name="product-name"
                    id="product-name"
                    className="product-name-form-input"
                    placeholder="Введіть назву бренду"
                    value={productBrend}
                    onChange={(event) => setProductBrend(event.target.value.toUpperCase())}
                />

                <label htmlFor="product-price" className="product-price-title">
                    Ціна товару
                </label>
                <input
                    maxLength={5}
                    minength={0}
                    name="product-price"
                    id="product-price"
                    className="product-price-form-input"
                    type="text"
                    placeholder="Введіть ціну товару"
                    value={productPrice}
                    onChange={(event) => {
                        const newValue = event.target.value;
                        if (!(newValue.length === 1 && newValue[0] === '0') && (!isNaN(newValue) || newValue === '')) {
                            setProductPrice(newValue);
                        }
                    }}
                />

                <label htmlFor="selected_category" className="product-name-title">Оберіть категорію</label>
                <select name="selected_category" id="selected_category" className="product-name-form-input" value={categoryValue} onChange={CategorySelector}>
                    {Categories.map((item, index) => (
                        <option
                            value={item.name}
                            id={item.id}
                            key={index}>
                            {item.name}
                        </option>
                    ))}
                </select>

                <label htmlFor="selected_subCategory" className="product-name-title">Оберіть підкатегорію</label>
                <select name="selected_subCategory" id="selected_subCategory" className="product-name-form-input"
                    value={subCaregoryValue}
                    onChange={subCategorySelector}>
                    {subCaregorySelest.map((item, index) => (
                        <option
                            value={item.name}
                            id={item.id}
                            key={index}>
                            {item.name}
                        </option>
                    ))}
                </select>

                <label htmlFor="product-photo" className="product-price-photo">
                    Фото
                </label>
                <PhotoUploader pfotosArray={pfotosArray} setPhotosArray={setPhotosArray} />

                <label htmlFor="product-description" className="product-description-title">
                    Опис товару
                </label>
                <textarea
                    maxLength={1500}
                    name="product-description"
                    id="product-description"
                    className="product-description-form-input"
                    value={productDescription}
                    onChange={(e) => setProductDescription(e.target.value)}
                />

                <div className="button-container">
                    <button type="submit" className="button-submit-form"
                        // onClick={(e) => pushToButton(e)}>
                        onClick={(e) => handleSubmit(e)}>
                        Зберегти
                    </button>
                </div>
            </form>
            {
                isModalOpen && (
                    <div className="modal-overlay">
                        <div className="modal-content in-userpage">
                            <h4 className='modal-in-userpage-title'>Товар додано до каталогу.</h4>
                            <button className='modal-content-button-in-userpage' onClick={() => setIsModalOpen(false)}>Продовжити</button>
                            <p className='modal-paragraf-or'>або</p>
                            <button className='modal-content-button-in-userpage' onClick={pushUserToNewGood}>Подивитись товар на сайті</button>
                        </div>
                    </div>
                )
            }
        </>

    );
}

export default React.memo(RightColumnAddNewGood);
