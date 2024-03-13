import React from 'react';
import { useState } from 'react';
import Image from 'next/image';

function RightColumnAddNewGood() {
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productDescription, setProductDescription] = useState('');

    const [pfotoscount, setPhotosCount] = useState(4);
    const [pfotosArray, setPhotosArray] = useState([]);
    const [photos, setPhotos] = useState(Array.from({ length: pfotoscount }, () => null));


    const PhotoUploader = () => {
        // const [pfotoscount, setPhotosCount] = useState(4);
        // const [pfotosArray, setPhotosArray] = useState([]);
        // const [photos, setPhotos] = useState(Array.from({ length: pfotoscount }, () => null));

        const handleFileChange = (event) => {
            // console.log(event.target.id)
            const fileList = event.target.files;
            const filesArray = Array.from(fileList);
            if (pfotosArray[event.target.id] === undefined) {
                const newArray = [...pfotosArray, ...filesArray];
                setPhotosArray(newArray);
            } else {
                const updatedArray = pfotosArray.map((photo, index) => {
                    if (index.toString() === event.target.id) {
                        return filesArray[0]; // Заменяем файл по указанному индексу
                    } else {
                        return photo; // Оставляем остальные файлы без изменений
                    }
                });
                setPhotosArray(updatedArray);
            }
        };


        return (
            <div className='photo-previews-row'>
                {photos.map((photo, index) => (
                    <div className='photo-preview' key={index}>
                        <input id={index}
                            type="file"
                            className='input-photo-preview'
                            multiple
                            onChange={(e) => handleFileChange(e)}
                        />
                        <Image
                            className='input-photo-bg-inage'
                            alt='input-photo-bg-inage'
                            // src="bg_input_goods.svg"
                            src={pfotosArray[index] ? URL.createObjectURL(pfotosArray[index]) : "/bg_input_goods.svg"}
                            width={100}
                            height={100}
                        />

                    </div>
                ))}

            </div>
        );
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            productName,
            productPrice,
            productDescription,
            pfotosArray
        };
        console.log(formData);
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
            <PhotoUploader />

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
    )
}

export default React.memo(RightColumnAddNewGood);