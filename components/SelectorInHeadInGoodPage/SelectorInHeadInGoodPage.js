import { useState, useRef } from 'react';
import Image from 'next/image';


export default function HeaderSelectorToFilter() {
    const [isVisibleChecked, setIsVisibleChecked] = useState(false);
    const [classNames, setClassNames] = useState(['filter-checked-container', 'filter-checked-container', 'filter-checked-container'])
    const [isVisibleArrow, setIsVisibleArrow] = useState(true);
    const [selectedOption, setSelectedOption] = useState("Новинки");
    const [isToggled, setIsToggled] = useState(false);

    const handleMouseEnter = (index) => {
        const updatedClassNames = [...classNames];
        updatedClassNames[index] = 'filter-checked-container active';
        setClassNames(updatedClassNames);

    };

    const handleMouseLeave = (index) => {
        const updatedClassNames = [...classNames];
        updatedClassNames[index] = 'filter-checked-container';
        setClassNames(updatedClassNames);
        console.log(777)
    };

    const handleToggle = (index) => {
        setIsToggled((prevIsToggled) => !prevIsToggled);
        setIsVisibleArrow((previsVisibleArrow) => !previsVisibleArrow);
    };

    const hoverAction = (event) => {
        console.log(777)
    }

    const hoverActionNo = (event) => {
        console.log(event.currentTarge)
    }

    return (
        <div className="selector-filter-container">
            <ul className={`options-list ${isToggled ? 'expanded' : ''}`}>
                <li value="new goods"

                    className="options-list-first">{selectedOption}
                    <button className='filter-arrow-button' onClick={handleToggle}>
                        {isVisibleArrow && (
                            <Image
                                alt="logo home"
                                src='/selector-arrow-down.svg'
                                quality={100}
                                width={20}
                                height={20}
                            />
                        )}
                    </button>
                </li>
                <li value="from cheap to expensive" className='options-list-another'
                    onMouseEnter={() => handleMouseEnter(1)}
                    onMouseLeave={() => handleMouseLeave(1)}
                >Від дешевих до дорогих
                    <div className={classNames[1]}>
                        <Image
                            alt="logo home"
                            src='/checkmark-outline.svg'
                            quality={100}
                            width={24}
                            height={24} />
                    </div>
                </li>
                <li value="from cheap to expensive" className='options-list-another'
                    onMouseEnter={() => handleMouseEnter(2)}
                    onMouseLeave={() => handleMouseLeave(2)}
                >Від дорогих до дешевих
                    <div className={classNames[2]}>
                        <Image
                            alt="logo home"
                            src='/checkmark-outline.svg'
                            quality={100}
                            width={24}
                            height={24} />
                    </div>
                </li>
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