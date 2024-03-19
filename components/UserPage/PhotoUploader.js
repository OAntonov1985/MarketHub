import React from 'react';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
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
            if (newArray.length < 4) {
                while (newArray.length < 4) {
                    newArray.push(null);
                }
            }
            setPhotosArray(newArray);
        }
    };

    const deletePfoto = (index) => {
        let idToDelete = +index.target.id;
        let newArray = pfotosArray.filter((item, index) => index != idToDelete);
        setPhotosArray(newArray);
        if (newArray.length < 4) {
            while (newArray.length < 4) {
                newArray.push(null);
            }
        };
    }

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
                    <div className='container-for-cross'
                        id={index}
                        onClick={(event) => deletePfoto(event)}                    >
                        <Image
                            id={index}
                            className={'input-photo-delete-image'}
                            alt='input-photo-delete-image'
                            src={"/inputcross.svg"}
                            width={100}
                            height={100}
                        // onClick={deletePfoto(index)}
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

export default React.memo(PhotoUploader)