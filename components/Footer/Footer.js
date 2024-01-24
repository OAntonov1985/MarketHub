import Image from 'next/image';

export default function Footer() {
    return (
        <div className='footer'>
            <div className="footer-lert-column">
                <div className="footer-lert-column-logo-container">
                    <Image
                        alt="image of computer"
                        src='/logo.png'
                        quality={100}
                        fill
                        style={{
                            objectFit: 'contain',
                            width: '100%'

                        }}
                    />
                </div>
                <p className='footer-paragraf service'>Умови обслуговування</p>
                <p>Політика конфіденційності</p>
            </div>
            <div className="footer-central-column">
                <p className='central-column-paragraf' >©2024 MarketHub. Всі права захищено</p>
            </div>
            <div className="footer-right-column">
                <p className='footer-paragraf contacts'>Зворотній зв’язок</p>
                <p className='footer-paragraf contacts'>market.hub@gmail.com</p>
                <p>Графік роботи: <br />
                    Пн-Пт: з 09:00 до 20:00 <br />
                    Сб-Нд: з 10:00 до 19:00
                </p>

            </div>
        </div>
    );
}
