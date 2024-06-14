
import Cookies from 'js-cookie';
import { MaketHubURL } from '@/components/Constants';

export default async function RegistrationFunction(body) {
    let userInfo;
    let Errormasage;

    try {
        const response = await fetch(MaketHubURL + `createNewUser`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),

        });
        if (response.ok) {
            const data = await response.json()
                .then(data => {
                    userInfo = data.user;
                })

        } else {
            console.log(response)
            alert('Користувач з такою поштою або телефоном вже існує!');
            Errormasage = true;
        };
    } catch (error) {
        alert('Упс.... Щось пішло не так. зверніться до розробників');
        Errormasage = true;
    };
    return { userInfo, Errormasage }
}