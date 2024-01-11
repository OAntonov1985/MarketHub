// import { URLADRESS } from '../Constants';
// import Cookies from 'js-cookie';
// import { useRouter } from 'next/router';

// export default async function singInFunction(body) {
//     let JWTToken
//     try {
//         const response = await fetch(URLADRESS + 'login', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(body),

//         });

//         if (response.ok) {
//             const data = await response.json()
//                 .then(data => {
//                     Cookies.set('jwtToken', data.token);
//                     console.log('JWT Token:', data.token);
//                     JWTToken = data.token;
//                 })

//                 .catch(error => {
//                     console.error('Ошибка при парсинге JSON:', error);
//                 });

//         } else {
//             console.error('Login failed');

//         };
//     } catch (error) {
//         console.error('Error during login:', error);
//     };
//     return { JWTToken }
// }