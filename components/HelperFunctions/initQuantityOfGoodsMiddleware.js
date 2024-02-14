// let initQuantityOfGoodsMiddlewareCalled = false;

// const initQuantityOfGoodsMiddleware = (store) => (next) => (action) => {
//     if (!initQuantityOfGoodsMiddlewareCalled && action.type === '@@INIT') {
//         initQuantityOfGoodsMiddlewareCalled = true;
//         const storedBasket = localStorage.getItem('BASKET');
//         if (storedBasket) {
//             const basket = JSON.parse(storedBasket);
//             const quantityOfGoods = basket.reduce((acc, item) => acc + item.number, 0);
//             store.dispatch(totalGoods(quantityOfGoods));
//         }
//     }
//     return next(action);
// };