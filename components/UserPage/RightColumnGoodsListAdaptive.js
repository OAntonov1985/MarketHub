// import { useDispatch, useSelector } from 'react-redux';

// export default function RightColumnGoodsListAdaptive() {
//     const dispatch = useDispatch();
//     const { renderInfo } = useSelector((state) => state.user);
//     return (
//         <div className={`goods-list-adaptive ${renderInfo == "allGoods" ? "" : ""}`}>
//             <div className='header-container' onClick={() => dispatch(setRenderInfo("start"))}>
//                 <div className='arrou-image-container'>
//                     <Image
//                         className='logo-of-point'
//                         alt="logo of point"
//                         src="/arrow-left.svg"
//                         quality={100}
//                         fill
//                         sizes="(max-width: 100%)"
//                         style={{
//                             objectFit: 'contain',
//                             width: '100%'
//                         }}
//                     />
//                 </div>
//                 <h4 className='user-info-title'>Товари</h4>
//                 <div className='goods-order-to-render'>
//                     <div>Всі товари</div>
//                     <div>Активні товари</div>
//                     <div>Неактивні товари</div>
//                     <div>Додати товар</div>
//                 </div>
//             </div>
//         </div>
//     )
// }