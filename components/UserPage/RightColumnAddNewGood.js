import React, { useState, useMemo } from 'react';
import { useSelector } from 'react-redux';
import PhotoUploader from './PhotoUploader';



function RightColumnAddNewGood() {
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const { pfotoArrayLength } = useSelector((state) => state.user);
    const [pfotosArray, setPhotosArray] = useState(Array.from({ length: pfotoArrayLength }, () => null));


    const handleSubmit = (e) => {
        e.preventDefault();
        const testArr = pfotosArray.filter(item => item !== null)
        if (productName.length <= 4) {
            alert("Назва товару має бути більше 4 символів")
        }
        else if (testArr.length < 4) {
            alert("Ьінімальна кількість фото має бути 4")
        }
        else if (productDescription.length <= 10) {
            alert("Мінімальна довжина опису товару має бути 10 символів")
        }
        else if (productPrice.length == 0 || productPrice == 0) {
            alert("Введіть корректну вартість товару")
        }
        else {
            const formData = {
                productName,
                productPrice,
                productDescription,
                pfotosArray
            };
            console.log(formData);
        }

    };

    return (
        <form className="add-new-good" onSubmit={handleSubmit}>
            <label htmlFor="product-name" className="product-name-title">
                Назва товару
            </label>
            <input
                name="product-name"
                id="product-name"
                className="product-name-form-input"
                placeholder="Введіть назву товару"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
            />

            <label htmlFor="product-price" className="product-price-title">
                Ціна товару
            </label>
            <input
                name="product-price"
                id="product-price"
                className="product-price-form-input"
                type="number"
                placeholder="Введіть ціну товару"
                value={productPrice}
                onChange={(e) => setProductPrice(e.target.value)}
            />

            <label htmlFor="product-photo" className="product-price-photo">
                Фото
            </label>
            <PhotoUploader pfotosArray={pfotosArray} setPhotosArray={setPhotosArray} />

            <label htmlFor="product-description" className="product-description-title">
                Опис товару
            </label>
            <textarea
                name="product-description"
                id="product-description"
                className="product-description-form-input"
                value={productDescription}
                onChange={(e) => setProductDescription(e.target.value)}
            />

            <div className="button-container">
                <button type="submit" className="button-submit-form">
                    Зберегти
                </button>
            </div>
        </form>
    );
}

export default React.memo(RightColumnAddNewGood);
