import React from 'react';


function BasketForm() {


    const handleChange = async (event) => {
        // const cityName = event.target.value;
        // console.log(event.target.value)

        // const requestOptions = {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({
        //         apiKey: 'e89bd5854276bb600236d063f5e2c119',
        //         modelName: 'Address',
        //         calledMethod: 'searchSettlements',
        //         methodProperties: {
        //             CityName: cityName,
        //             Limit: '50',
        //             Page: '2'
        //         }
        //     })
        // };
        // // console.log(777)
        // try {
        //     const response = await fetch('https://api.novaposhta.ua/v2.0/json/', requestOptions);
        //     const data = await response.json();
        //     console.log(data.data[0].Addresses); // Вывод результата в консоль
        // } catch (error) {
        //     console.error('Error:', error);
        // }
    };


    return (
        <form className='basket-user-form'>
            <div className='basket-with-goods-columns'>
                <div className='basket-with-goods-left-column'>
                    <label htmlFor="userName"
                        className='basket-label-title'
                    >Ім`я</label>
                    <input
                        id="userName"
                        type="text"
                        className="basket-input active-field"
                        placeholder="Введіть своє ім’я"
                        onChange={handleChange}
                    // value={userEmail}
                    // onBlur={validateEmail}
                    // required 
                    />



                    <label htmlFor="userSurname"
                        className='basket-label-title'
                    >Прізвище</label>
                    <input
                        id="userSurname"
                        type="text"
                        className="basket-input active-field"
                        placeholder="Введіть своє прізвище"
                    // onChange={(e) => setUserEmail(e.target.value)}
                    // value={userEmail}
                    // onBlur={validateEmail}
                    // required 
                    />

                </div>
                <div className='basket-with-goods-right-column'>
                    <label htmlFor="userPhone"
                        className='basket-label-title'
                    >Номер телефону</label>
                    <input
                        id="userPhone"
                        type="text"
                        className="basket-input active-field"
                        placeholder="Введіть свій номер телефону"
                    // onChange={(e) => setUserEmail(e.target.value)}
                    // value={userEmail}
                    // onBlur={validateEmail}
                    // required
                    />

                    <label htmlFor="userEmail"
                        className='basket-label-title'
                    >Електронна пошта</label>
                    <input
                        id="userEmail"
                        type="text"
                        className="basket-input active-field"
                        placeholder="Введіть свою пошту"
                    // onChange={(e) => setUserEmail(e.target.value)}
                    // value={userEmail}
                    // onBlur={validateEmail}
                    // required 
                    />
                </div>
            </div>



        </form>
    )
};

export default React.memo(BasketForm);