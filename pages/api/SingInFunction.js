// import { URLADRESS } from '../Constants';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { URLADRESS } from '@/components/Constants';

export default async function singInFunction(body) {
    let JWTToken
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
                    console.log('JWT Token:', data.token);
                    JWTToken = data.token;
                })

                .catch(error => {
                    console.error(error);
                    prompt(error);
                });

        } else {
            alert('Невірно введені пошта або пароль! Спробуйте ще');

        };
    } catch (error) {
        alert('Упс.... Щось пішло не так');
    };
    return { JWTToken }
}