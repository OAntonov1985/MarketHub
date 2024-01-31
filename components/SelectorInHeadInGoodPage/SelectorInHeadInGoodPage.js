import { useState, useRef } from 'react';
import Image from 'next/image';

export default function HeaderSelectorToFilter() {
    const [isOpen, setIsOpen] = useState(false);
    const [heightBlock, setHeightBlock] = useState(null);
    const [selectedOption, setSelectedOption] = useState("Новинки");

    function showList() {
        setHeightBlock(prevHeight => (prevHeight ? null : 'auto'));
        setIsOpen(prevOpen => !prevOpen);
    }

    return (
        <div className="selector-filter-container">
            <div className="selected-option">
                <span className="selected-value">{selectedOption}</span>
                <button className='filter-arrow-buttol' onClick={showList}>
                    <Image
                        alt="logo home"
                        src='/selector-arrow-down.svg'
                        quality={100}
                        width={20}
                        height={20} />
                </button>
            </div>
            <ul className={`${styles['options-list']} ${isOpen ? styles.open : ''}`}>
                <li value="new goods" className="options-list-first">{selectedOption}</li>
                <li value="from cheap to expensive">Від дешевих до дорогих</li>
                <li value="from expensive to cheap">Від дорогих до дешевих</li>
            </ul>
        </div>
    );
}

// <div className="selector-filter-container">
//     <select className='selector-filter'>
//         <option value="Новинки" defaultValue>Новинки</option>
//         <option value="From cheap to expensive" >Від дешевих до дорогих</option>
//         <option value="From expensive to cheap" >Від дорогих до дешевих</option>
//     </select>
// </div>