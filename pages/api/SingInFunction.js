import Cookies from 'js-cookie';
import { URLADRESS } from '@/components/Constants';

export default async function singInFunction(body) {
    let JWTToken
    let Errorflag
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
                    Cookies.set('jwtToken', data.token);
                    Cookies.set('userName', data.username);
                    // console.log('userID', data.id);
                    // console.log(data);
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