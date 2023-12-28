import usersData from '../../components/Data/data.js';

export default function GetInputInfo(event, router, singInText) {
    event.preventDefault();

    const userFound = usersData.find(user => user.useremail === event.target[0].value);

    if (singInText === 'Sign in') {
        if (userFound === undefined) alert("Користувача не знайдено")
        else if (userFound.userpassword === event.target[1].value) {
            alert(`"З поверненням, ${event.target[0].value}`);
            router.push('/producstpage')
        }
        else alert('Пароль введений невірно. Спробуйте ще');
    }

    else {
        if (event.target[3].value) {
            if (event.target[1].value === event.target[3].value) {
                alert(`Шановний, ${event.target[0].value}! Ви успішно зареєструвались на MArketHub! Вдалих продажів`);
                router.push('/producstpage')
            }
            else alert('Паролі не співпадають! Спробуйте ще');
        }
    }
}