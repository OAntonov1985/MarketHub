import React from 'react';
import { useState } from 'react';
import Image from 'next/image';

function RightColumnAddNewGood() {

    const PhotoUploader = () => {
        const [photos, setPhotos] = useState(Array.from({ length: 4 }, () => null));

        const handleFileChange = (event) => {
            const fileList = event.target.files;
            const filesArray = Array.from(fileList);
            setPhotos(filesArray);
        };

        return (
            <div className='photo-previews-row'>
                {photos.map((photo, index) => (
                    <div className='photo-preview' key={index}>
                        <input
                            type="file"
                            className='input-photo-preview'
                            multiple
                            onChange={handleFileChange}
                        />
                        <Image
                            className='input-photo-bg-inage'
                            alt='input-photo-bg-inage'
                            src={photo ? URL.createObjectURL(photo) : "/bg_input_goods.svg"}
                            width={100}
                            height={100}
                        />
                    </div>
                ))}
            </div>
        );
    };









    return (
        <form className="add-new-good">
            <label htmlFor="product-name"
                className="product-name-title">
                Назва товару</label>
            <input name="product-name" id="product-name"
                className="product-name-form-input"
                // disabled={!isActiveFields}
                // onChange={(e) => setUserName(e.target.value)}
                placeholder="Введіть назву товару"
            // value={userName} 
            />

            <label htmlFor="product-price"
                className="product-price-title">
                Ціна товару</label>
            <input name="product-price" id="product-price"
                className="product-price-form-input"
                type='number'
                // disabled={!isActiveFields}
                // onChange={(e) => setUserSurname(e.target.value)}
                placeholder="Введіть ціну товару"
            // value={userSurname} 
            />

            <label htmlFor="product-photo"
                className="product-price-photo">
                Фото</label>
            <PhotoUploader />
            {/* <input name="product-price" id="product-price"
                className="product-price-form-input"
                type='number'
                // disabled={!isActiveFields}
                // onChange={(e) => setUserSurname(e.target.value)}
                placeholder="Введіть ціну товару"
            // value={userSurname} 
            /> */}
        </form>
    )
}

export default React.memo(RightColumnAddNewGood);