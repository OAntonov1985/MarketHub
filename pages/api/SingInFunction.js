import Cookies from 'js-cookie';
import { URLADRESS } from '@/components/Constants';

export default async function singInFunction(body) {
    let JWTToken
    let Errorflag

    const currentDate = new Date();
    currentDate.setTime(currentDate.getTime() + (24 * 60 * 60 * 1000));
    try {
        const response = await fetch(URLADRESS + 'login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),

        });

        if (response.ok) {
            const data = await response.json()
                .then(data => {
                    Cookies.set('jwtToken', data.token, { expires: currentDate });
                    Cookies.set('userName', data.username, { expires: currentDate });
                    JWTToken = data.token;
                })

        } else {
            alert('Невірно введені пошта або пароль! Спробуйте ще');
            Errorflag = true;
        };
    } catch (error) {
        alert('Упс.... Щось пішло не так');
        Errorflag = true;
    };
    return { JWTToken, Errorflag }
}