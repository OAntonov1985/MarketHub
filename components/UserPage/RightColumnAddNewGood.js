import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PhotoUploader from './PhotoUploader';
import Cookies from 'js-cookie';
import GetGoodByID from '@/pages/api/GetGoodByID';
import { setActiveSpinner, setGoodToEdit } from '@/slices/userSlice';
import { Computers } from '../Constants';
import { Phones } from '../Constants';
import { Household } from '../Constants';
import { GameConsoles } from '../Constants';
import { Audio } from '../Constants';
import AddNewGood from '@/pages/api/AddNewGood';
import Spinner from '../Spinner/Spinner';
import { uploadImagesToStorage } from '@/pages/api/DownloadImages';




function RightColumnAddNewGood() {
    const [productName, setProductName] = useState('');
    const [productBrend, setProductBrend] = useState('');
    const [subCaregorySelest, setSubCaregorySelest] = useState(Computers);

    const [categoryInfo, setCategoryInfo] = useState({
        id: "100",
        name: "Комп’ютерна техніка"
    });
    const [subCategoryInfo, setSubCategoryInfo] = useState({
        id: subCaregorySelest[0].id.toString(),
        name: subCaregorySelest[0].name
    });


    const [productPrice, setProductPrice] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const { pfotoArrayLength } = useSelector((state) => state.user);
    const { goodToEdit } = useSelector((state) => state.user);
    const [pfotosArray, setPhotosArray] = useState(Array.from({ length: pfotoArrayLength }, () => null));

    const dispatch = useDispatch();

    const userID = Cookies.get('userID');



    const fetchData = async () => {
        dispatch(setActiveSpinner(true));
        try {
            const result = await GetGoodByID(goodToEdit);
            console.log(result.result)
            setProductName(result.result.title);
            setProductPrice(result.result.price);
            setProductDescription(result.result.description);
            setPhotosArray(result.result.images)
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
        // dispatch(setActiveSpinner(true));

        const testArr = pfotosArray.filter(item => item !== null);
        const downloadURLs = await uploadImagesToStorage(pfotosArray, productBrend);
        console.log("Download URLs:", downloadURLs);
        // formData.append('images', downloadURLs);
        console.log(formData);

        // if (productBrend.length <= 1) {
        //     alert("Назва бренду товару має бути більше 2 символів");
        // } else if (testArr.length < 4) {
        //     alert("Мінімальна кількість фото має бути 4");
        // } else if (productDescription.length <= 3) {
        //     alert("Мінімальна довжина опису товару має бути 10 символів");
        // } else if (productPrice.length === 0 || productPrice === "0") {
        //     alert("Введіть корректну вартість товару");
        // } else {
        //     const currentDate = new Date();
        //     const year = currentDate.getFullYear();
        //     const month = String(currentDate.getMonth() + 1).padStart(2, '0');
        //     const day = String(currentDate.getDate()).padStart(2, '0');
        //     const hours = String(currentDate.getHours()).padStart(2, '0');
        //     const minutes = String(currentDate.getMinutes()).padStart(2, '0');
        //     const seconds = String(currentDate.getSeconds()).padStart(2, '0');
        //     const formattedDate = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;

        //     // const formData = new FormData();
        //     // formData.append('title', productName);
        //     // formData.append('price', productPrice);
        //     // formData.append('description', productDescription.split('.'));
        //     // formData.append('images', pfotosArray[0]); // Добавьте изображение для thumbnail

        //     // formData.append('available', true);
        //     // formData.append('brend', productBrend);
        //     // formData.append('category_details', JSON.stringify(categoryInfo));
        //     // formData.append('sub_category_detail', JSON.stringify(subCategoryInfo));
        //     // formData.append('seller_id', 1003);
        //     // formData.append('create_at', formattedDate);
        //     // formData.append('how_many_solds', 0);


        //     const downloadURLs = await uploadImagesToStorage(pfotosArray, productBrend);
        //     console.log("Download URLs:", downloadURLs);
        //     formData.append('images', downloadURLs);
        //     console.log(formData);
        // }
    }


    function clearAllFields() {
        setIsModalOpen(true);
        setProductName('');
        setProductPrice('');
        setProductDescription('');
        setPhotosArray(Array.from({ length: pfotoArrayLength }, () => null))
    }



    function subCategorySelector(event) {
        if (event.target.selectedOptions[0].id == "100") setSubCaregorySelest(Computers)
        else if (event.target.selectedOptions[0].id == "200") setSubCaregorySelest(Phones)
        else if (event.target.selectedOptions[0].id == "300") setSubCaregorySelest(Household)
        else if (event.target.selectedOptions[0].id == "400") setSubCaregorySelest(GameConsoles)
        else if (event.target.selectedOptions[0].id == "500") setSubCaregorySelest(Audio)
        setCategoryInfo({
            id: event.target.selectedOptions[0].id,
            name: event.target.selectedOptions[0].value
        });
        setSubCategoryInfo({
            id: subCaregorySelest[0].id,
            name: subCaregorySelest[0].name
        })
    }
    // console.log(categoryInfo)
    // console.log(subCategoryInfo)
    // Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita dolorem in soluta corrupti, nemo voluptatibus excepturi nobis libero modi illo recusandae minima labore dolor officiis, animi tenetur sint quidem veritatis.
    return (
        <>
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
                <select name="selected_category" id="" className="product-name-form-input" onChange={subCategorySelector}>
                    <option value="Комп’ютерна техніка" id='100'>Комп’ютерна техніка</option>
                    <option value="Мобільні телефони" id='200'>Мобільні телефони</option>
                    <option value="Побутова техніка" id='300'>Побутова техніка</option>
                    <option value="Ігрові приставки" id='400'>Ігрові приставки</option>
                    <option value="Аудіотехніка" id='500'>Аудіотехніка</option>
                </select>

                <label htmlFor="selected_subCategory" className="product-name-title">Оберіть підкатегорію</label>
                <select name="selected_subCategory" id="" className="product-name-form-input"
                    onChange={(event) => setSubCategoryInfo({
                        id: event.target.selectedOptions[0].id,
                        name: event.target.selectedOptions[0].value
                    })}>
                    {subCaregorySelest.map((item, index) => {
                        return (
                            <option value={item.name} id={item.id} key={index}>{item.name}</option>
                        )
                    })}
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
                    <button type="submit" className="button-submit-form" onClick={handleSubmit}>
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
                        </div>
                    </div>
                )
            }
        </>

    );
}

export default React.memo(RightColumnAddNewGood);
