import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Image from 'next/image';
import BreadCrumps from '../Breadcrumps/Breadcrumps';

export default function GoodCard() {
    return (
        <div className="good-card">
            <Header />
            <div className="good-card-main-content">

                <BreadCrumps />

                <div className="good-card-container">
                    <div className="good-card-left-column">dsgdhg</div>
                    <div className="good-card-right-column">
                        <h4 className='good-card-title'>Ноутбук LENOVO IdeaPad 3</h4>
                        <div className='good-card-tech-info'>
                            <p className="good-card-number">Код товарцу: 34546</p>
                            <p className='top-sellers-availability'>Є в  наявності</p>
                        </div>
                        <div className="good-card-description">
                            <p className='description-title'>Опис товару</p>
                            <p className='description-text'>
                                Компактний, але при цьому високопродуктивний ноутбук
                                Зберігайте підключення до Інтернету в будь-якому місці за допомогою надзвичайно тонкого ноутбука IdeaPad 3 (7th Gen, 15, Intel). Він завантажується за лічені секунди завдяки функції Flip to Start, для включення якої достатньо підняти кришку ноутбука, і оснащений надефективним процесором Intel, який дозволяє легко працювати в багатозадачному режимі
                            </p>
                        </div>
                        <p className='good-card-price'>29 999 грн</p>
                        <div className='godd-card-added'>
                            <button>Додати до кошика</button>
                            <button>Додати до улюбленого</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}