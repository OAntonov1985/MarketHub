import { useState, useRef } from 'react';
import Image from 'next/image';


export default function HeaderSelectorToFilter() {
    const [selectedOption, setSelectedOption] = useState("Новинки");

    const liClassname = "filter-li-options";
    const [classNames, setClassNames] = useState(liClassname);

    const [isVisibleChecked, setIsVisibleChecked] = useState(false);
    // const buttonClassname = "filter-arrow-button";

    const [isVisibleArrow, setIsVisibleArrow] = useState(true);
    const [isToggled, setIsToggled] = useState(false);


    const handleToggle = () => {
        setIsToggled((prevIsToggled) => !prevIsToggled);
        setClassNames("filter-arrow-button display-none");
        setIsVisibleArrow((previsVisibleArrow) => !previsVisibleArrow);
    };

    const setLiValue = (event) => {
        setSelectedOption(event.target.innerText);
        setClassNames(liClassname);
        setIsToggled((prevIsToggled) => !prevIsToggled);
    }


    return (
        <div className="selector-filter-container">
            <p className='selected-sort-option'>{selectedOption}
                <button className="filter-arrow-button" onClick={handleToggle}>
                    {/* {isVisibleArrow && (
                        <Image className='arrow'
                            alt="logo home"
                            src='/selector-arrow-down.svg'
                            quality={100}
                            width={20}
                            height={20}
                        />
                    )} */}
                    <Image className='arrow'
                        alt="logo home"
                        src='/selector-arrow-down.svg'
                        quality={100}
                        width={20}
                        height={20}
                    />
                </button>
            </p>
            <ul className={`options-list ${isToggled ? 'display-option-list' : ''}`}>
                <li value="Новинки" className={`${liClassname} ${isToggled ? 'display-li-options' : ''}`}
                    onClick={setLiValue}
                >Новинки
                    <div className="filter-checked-container">
                        <Image
                            alt="logo home"
                            src='/checkmark-outline.svg'
                            quality={100}
                            width={24}
                            height={24} />
                    </div>
                </li>
                <li value="Від дешевих до дорогих" className={`${liClassname} ${isToggled ? 'display-li-options' : ''}`}
                    onClick={setLiValue}
                >Від дешевих до дорогих
                    <div className="filter-checked-container">
                        <Image
                            alt="logo home"
                            src='/checkmark-outline.svg'
                            quality={100}
                            width={24}
                            height={24} />
                    </div>
                </li>
                <li value="Від дорогих до дешевих" className={`${liClassname} ${isToggled ? 'display-li-options' : ''}`}
                    onClick={setLiValue}
                >Від дорогих до дешевих
                    <div className="filter-checked-container">
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

