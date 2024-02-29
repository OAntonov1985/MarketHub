// import { MaketHubURL } from "../../components/Constants";

// export default async function GetFilteredData(title, id) {


//     let string;
//     if (title === "Новинки") {
//         string = MaketHubURL + `newgoods/categories/${id}/1/0/12`;
//     }
//     else if (title === "Від дешевих до дорогих") {
//         string = MaketHubURL + `goods/categories/${id}/1/0/12`;
//     }
//     else if (title === "Від дорогих до дешевих") {
//         string = MaketHubURL + `goods/categories/${id}/-1/0/12`;
//     }


//     let data
//     try {
//         const response = await fetch(string, {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(body),

//         });
//         if (response.ok) {
//             data = await response.json()
//                 .then(data => {
//                     console.log(data)
//                 })

//         } else {
//             console.log(response)
//             alert('Користувач з такою поштою або телефоном вже існує!');
//         };
//     } catch (error) {
//         alert('Упс.... Щось пішло не так. зверніться до розробників');

//     };
//     return { data }
// }




import { MaketHubURL } from "../../components/Constants";

export default async function GetFilteredData(title, id) {
    let string;
    if (title === "Новинки") {
        string = MaketHubURL + `newgoods/categories/${id}/1/0/12`;
    }
    else if (title === "Від дешевих до дорогих") {
        string = MaketHubURL + `goods/categories/${id}/1/0/12`;
    }
    else if (title === "Від дорогих до дешевих") {
        string = MaketHubURL + `goods/categories/${id}/-1/0/12`;
    }

    try {
        const response = await fetch(string, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            throw new Error('Ошибка при получении данных');
        }
    } catch (error) {
        throw new Error('Упс.... Щось пішло не так. зверніться до розробників');
    }
}