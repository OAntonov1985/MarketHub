import Cookies from 'js-cookie';

// export default function AddArrayToCookie(title, price, thumbnail, id) {
//     const number = 0;
//     const BASKET = Cookies.get('BASKET');
//     console.log('go')

//     if (BASKET === undefined) {
//         const basketObject = [{
//             id: id,
//             title: title,
//             thumbnail: thumbnail,
//             price: price,
//             number: number + 1
//         }];
//         const jsonString = JSON.stringify(basketObject);
//         Cookies.set('BASKET', jsonString);
//         return
//     }

//     if (BASKET !== undefined) {
//         const basketArr = JSON.parse(BASKET);

//         const arrayIndex = basketArr.findIndex(item => {
//             return item.id === id
//         });
//         console.log(arrayIndex)


//         if (arrayIndex >= 0) {
//             console.log(basketArr[arrayIndex].number)
//             basketArr[arrayIndex].number = basketArr[arrayIndex].number + 1;
//             const jsonString = JSON.stringify(basketArr);
//             Cookies.set('BASKET', jsonString);
//         }
//         else {
//             const basketObject = {
//                 id: id,
//                 title: title,
//                 thumbnail: thumbnail,
//                 price: price,
//                 number: basketArr[arrayIndex].number + 1
//             };
//             basketArr.push(basketObject);
//             const jsonString = JSON.stringify(basketArr);
//             Cookies.set('BASKET', jsonString);
//         }
//     }
// }