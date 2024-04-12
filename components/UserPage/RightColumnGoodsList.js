import React, { useState, useEffect } from 'react';
import RightColumnAddNewGood from './RightColumnAddNewGood';
import { useSelector } from 'react-redux';
import RightColumnUsersGoodsListToRender from './RightColumnUsersGoodsListToRender';
import GetusersGoodsToSale from '@/pages/api/GetusersGoodsToSale';
import { useDispatch } from 'react-redux';
import { setActiveSpinner } from '@/slices/userSlice';
import SetProductAvability from '@/pages/api/SetProductAvability';
import DeleteGood from '@/pages/api/DeleteGood';
import GetLinksOfImages from '@/pages/api/GetLinksOfImages';
import deleteImagesAndFolder from '@/pages/api/DeleteFilesInFireBase';


function RightColumnGoodsList() {
    const [userGoodsToSale, setUserGoodsToSale] = useState([]);
    const [totalUserGoodsToSale, setTotalUserGoodsToSale] = useState(0);
    const { activeSubItemInGood } = useSelector((state) => state.user);
    const [activePage, setActivePage] = useState(1);
    const [activeItem, setActiveItem] = useState(null);
    const dispatch = useDispatch();

    const objectToSend = { userGoodsToSale, totalUserGoodsToSale, setActivePage, activePage, setActiveItem, activeItem, changeGoodAvability, deleteGood };

    // console.log(userGoodsToSale)
    const fetchData = async () => {
        dispatch(setActiveSpinner(true));
        try {
            const result = await GetusersGoodsToSale(1003, activePage - 1, activeSubItemInGood === "Активні товари" ? true : activeSubItemInGood === "Неактивні товари" ? false : undefined);
            // console.log(result)
            setUserGoodsToSale(result.result.data);
            setTotalUserGoodsToSale(result.result.total);
            dispatch(setActiveSpinner(false));
        } catch (error) {
            alert('Упс.... Щось пішло не так. зверніться до розробників');
        }
    };


    useEffect(() => {
        if (activeSubItemInGood === "Всі товари" ||
            activeSubItemInGood === "Активні товари" ||
            activeSubItemInGood === "Неактивні товари") {
            fetchData();
        }
    }, [activeSubItemInGood, activePage]);

    useEffect(() => {
        setActivePage(1);
        setActiveItem(null);
    }, [activeSubItemInGood]);

    async function changeGoodAvability(event, isAvalable) {
        dispatch(setActiveSpinner(true));
        try {
            const result = await SetProductAvability(event.target.id, !isAvalable);
            fetchData();
            dispatch(setActiveSpinner(false));
            alert(result.result.message);
        } catch (error) {
            alert('Упс.... Щось пішло не так. зверніться до розробників');
        }
    };

    async function deleteGood(event, title) {
        let isDeletingGood = confirm(`Ви дійсно бажаєте видалити ${title}`);

        if (isDeletingGood) {
            dispatch(setActiveSpinner(true));
            try {
                const linksArray = await GetLinksOfImages(event.target.id);
                if (linksArray.length > 0) {
                    const resultDeleteImg = await deleteImagesAndFolder(linksArray);
                    if (resultDeleteImg) {
                        const result = await DeleteGood(event.target.id);
                        fetchData();
                        alert(result.result.message);
                    } else {
                        dispatch(setActiveSpinner(false));
                        alert("Щось пішло не так");
                    }
                }
            } catch (error) {
                alert('Упс.... Щось пішло не так. зверніться до розробників');
            }
        }
    };

    return (
        <>
            {activeSubItemInGood === "Додати товар" ? < RightColumnAddNewGood /> : < RightColumnUsersGoodsListToRender
                objectToSend={objectToSend}
            />}
        </>
    )
}

export default React.memo(RightColumnGoodsList);