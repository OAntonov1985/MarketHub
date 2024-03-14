import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { setPhotoArrayLength } from '@/slices/userSlice';

function PhotoUploader({ pfotosArray, setPhotosArray }) {
    const dispatch = useDispatch();

    const handleFileChange = (event) => {

        const arrayIndex = parseInt(event.target.id);

        const fileList = event.target.files;
        const filesArray = Array.from(fileList);

        const allNotNull = pfotosArray.every(item => item === null);

        if (pfotosArray[arrayIndex] && filesArray.length === 1) {
            const updatedArray = pfotosArray.map((photo, index) => {
                if (index === arrayIndex) {
                    return filesArray[0];
                } else {
                    return photo;
                }
            });
            setPhotosArray(updatedArray);
        }
        else if (allNotNull) {
            if (filesArray.length >= pfotosArray.length) {
                dispatch(setPhotoArrayLength(pfotosArray.length + filesArray.length));
                setPhotosArray(filesArray);
            }
            else {
                const newArray = filesArray.concat(pfotosArray.slice(filesArray.length));
                setPhotosArray(newArray);
            }
        }
        else {

            dispatch(setPhotoArrayLength(pfotosArray.length + filesArray.length));
            let newArray = pfotosArray.concat(filesArray);
            newArray = newArray.filter(item => item !== null);
            setPhotosArray(newArray);
        }


    };

    return (
        <div className='photo-previews-row'>
            {pfotosArray.map((photo, index) => (
                <div className='photo-preview' key={index}>
                    <input
                        type="file"
                        id={index}
                        className='input-photo-preview'
                        multiple
                        onChange={(e) => handleFileChange(e, index)}
                    />
                    <div className='image-container-add-good'>
                        <Image
                            className={`input-photo-bg-image ${photo ? "input-photo-bigger" : ""}`}
                            alt='input-photo-bg-inage'
                            src={photo ? URL.createObjectURL(photo) : "/plusininputphoto.svg"}
                            width={100}
                            height={100}
                        />
                    </div>
                </div>
            ))}
            <div className='photo-preview'>
                <input
                    type="file"
                    className='input-photo-preview'
                    multiple
                    onChange={(e) => handleFileChange(e)}
                />
                <div className='image-container-add-good'>
                    <Image
                        className='input-photo-bg-image'
                        alt='input-photo-bg-inage'
                        src="/plusininputphoto.svg"
                        width={100}
                        height={100}
                    />
                </div>
            </div>
        </div>
    );
}

function RightColumnAddNewGood() {
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [pfotosArrayLength, setPfotosArrayLength] = useState(4);
    const { pfotoArrayLength } = useSelector((state) => state.user);
    const [pfotosArray, setPhotosArray] = useState(Array.from({ length: pfotoArrayLength }, () => null));


    const memoizedPhotoUploader = useMemo(() => <PhotoUploader pfotosArray={pfotosArray} setPhotosArray={setPhotosArray} />, [pfotosArray, setPhotosArray]);

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
            {memoizedPhotoUploader}

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
