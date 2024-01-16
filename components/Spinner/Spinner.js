import { ColorRing } from 'react-loader-spinner'

export default function spinner() {
    return (
        <>
            <ColorRing
                visible={true}
                height="80"
                width="80"
                ariaLabel="color-ring-loading"
                wrapperStyle={{}}
                wrapperClass="color-ring-wrapper"
                colors={['#116ACC', '#116ACC', '#116ACC', '#116ACC', '#116ACC']}
            />
        </>
    )
}