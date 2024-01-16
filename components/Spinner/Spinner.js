import { ColorRing } from 'react-loader-spinner'

export default function Spinner() {
    return (
        <div className="spinner">
            <div className="spinner-container">
                <div className="spinner-circle"></div>
                <div className="spinner-line"></div>
            </div>
        </div>
    )
}