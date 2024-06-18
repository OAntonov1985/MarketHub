import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { setClearUserBasket } from '@/slices/userSlice';


export default function ModalWindowInBasket({ setIsOpen, isOpen }) {
    const router = useRouter();
    const dispatch = useDispatch();


    function clearIngoAndPushToMain() {
        dispatch(setClearUserBasket());

        const updatedTotalPrice = JSON.stringify(0);
        localStorage.setItem('totalPriseInAllBasket', updatedTotalPrice);

        const updatedTotalGoods = JSON.stringify(0);
        localStorage.setItem('totalGoods', updatedTotalGoods);

        router.push("/");

    }

    return (
        <>
            {isOpen && (
                <div className="modal-overlay" onClick={() => setIsOpen(false)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <h4 className='modal-title'>Вітаємо!</h4>
                        <h4 className='modal-title'>Ваше замовлення успішно оформлено!</h4>
                        <button className='modal-button' onClick={() => { setIsOpen(false); clearIngoAndPushToMain() }}>Перейти на головну</button>
                    </div>
                </div>)}
        </>
    )
}