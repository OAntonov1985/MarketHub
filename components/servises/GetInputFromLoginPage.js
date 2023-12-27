import usersData from '../../components/Data/data.js'

export default function GetInputInfo(event) {
    event.preventDefault();
    console.log(event.target[0].value)
    console.log(event.target[1].value)
    const userFound = usersData.find(user => user.useremail === event.target[0].value);
    console.log(userFound)
    if (userFound === undefined) alert("Користувача не знайдено")
    else if (userFound.userpassword === event.target[1].value) {
        alert('Ви пройшли автентифікацію')
    }
    else alert('Пароль введений невірно. Спробуйте ще')

}