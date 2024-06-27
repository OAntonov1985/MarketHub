import { useSelector, useDispatch } from 'react-redux';
import Image from 'next/image';
import { setRenderInfo } from '@/slices/userSlice';



export default function ArrowComponent({ title }) {
    const dispatch = useDispatch();

    return (
        <div className='header-container' onClick={() => dispatch(setRenderInfo("start"))}>
            <div className='arrou-image-container'>
                <Image
                    className='logo-of-point'
                    alt="logo of point"
                    src="/arrow-left.svg"
                    quality={100}
                    fill
                    sizes="(max-width: 100%)"
                    style={{
                        objectFit: 'contain',
                        width: '100%'
                    }}
                />
            </div>
            <h4 className='user-info-title arrow-component'>{title}</h4>
        </div>
    )
}