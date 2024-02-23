
export default function ModalWindowInBasket({ toggleFunction, isOpen }) {

    return (
        <>
            {isOpen && (
                <div className="modal-overlay" onClick={toggleFunction}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <h4 className='modal-title'>Вітаємо!</h4>
                        <h4 className='modal-title'>Ваше замовлення успішно оформлено!</h4>
                        <button className='modal-button' onClick={toggleFunction}>Перейти на головну</button>
                    </div>
                </div>)}
        </>
    )
}