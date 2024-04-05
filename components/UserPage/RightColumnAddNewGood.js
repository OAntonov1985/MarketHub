import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PhotoUploader from './PhotoUploader';
import GetGoodByID from '@/pages/api/GetGoodByID';
import { setActiveSpinner, setGoodToEdit } from '@/slices/userSlice';




function RightColumnAddNewGood() {
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const { pfotoArrayLength } = useSelector((state) => state.user);
    const { goodToEdit } = useSelector((state) => state.user);
    const [pfotosArray, setPhotosArray] = useState(Array.from({ length: pfotoArrayLength }, () => null));

    const dispatch = useDispatch();



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

    const handleSubmit = (e) => {
        e.preventDefault();
        const testArr = pfotosArray.filter(item => item !== null)
        if (productName.length <= 4) {
            alert("Назва товару має бути більше 4 символів")
        }
        else if (testArr.length < 4) {
            alert("Мінімальна кількість фото має бути 4")
        }
        else if (productDescription.length <= 3) {
            alert("Мінімальна довжина опису товару має бути 10 символів")
        }
        else if (productPrice.length == 0 || productPrice == 0) {
            alert("Введіть корректну вартість товару")
        }
        else {
            // setIsModalOpen(true);
            const currentDate = new Date();
            const year = currentDate.getFullYear();
            const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // +1, так как месяцы нумеруются с 0
            const day = String(currentDate.getDate()).padStart(2, '0');

            // Получаем часы, минуты и секунды
            const hours = String(currentDate.getHours()).padStart(2, '0');
            const minutes = String(currentDate.getMinutes()).padStart(2, '0');
            const seconds = String(currentDate.getSeconds()).padStart(2, '0');
            const formattedDate = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
            const formData = {
                id: "U0937652",
                title: productName,
                price: productPrice,
                description: productDescription.split('.'),
                thumbnail: pfotosArray[0],
                images: pfotosArray.splice(1),
                available: true,
                brend: "Lenovo".toUpperCase(),
                category_details:
                {
                    id: 200,
                    name: "Мобільні телефони"
                },
                sub_category_detail: {
                    id: 210,
                    name: "Смартфони"
                },
                seller_id: 1003,
                create_at: formattedDate,
                how_many_solds: 0
            };
            // clearAllFields();
            console.log(formData);
        }
    };

    function clearAllFields() {
        setIsModalOpen(true);
        setProductName('');
        setProductPrice('');
        setProductDescription('');
        setPhotosArray(Array.from({ length: pfotoArrayLength }, () => null))
    }

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
