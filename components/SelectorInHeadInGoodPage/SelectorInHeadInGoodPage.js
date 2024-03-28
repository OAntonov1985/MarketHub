import { useState, useEffect } from 'react';
import Image from 'next/image';
import React from 'react';
// import 



function HeaderSelectorToFilter({ selectedFilterOption, setSelectedFilterOption, setActivePage, setSortIndex }) {

    const liClassname = "filter-li-options";
    const [classNames, setClassNames] = useState(liClassname);
    const [isToggled, setIsToggled] = useState(false);


    const handleToggle = () => {
        setIsToggled((prevIsToggled) => !prevIsToggled);
        setClassNames("filter-arrow-button display-none");
    };

    const setLiValue = (event) => {
        setSelectedFilterOption(event.target.innerText);
        setClassNames(classNames);
        setIsToggled((prevIsToggled) => !prevIsToggled);
        if (event.target.innerText == "Від дешевих до дорогих") {
            setSortIndex(1);
        }
        else if (event.target.innerText == "Від дорогих до дешевих") {
            setSortIndex(-1);
        }
        else if (event.target.innerText == "Новинки") {
            setSortIndex(0);
        }
        setActivePage(1);
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            const isShowSortMenu = event.target.closest('.selected-sort-option');

            if (!isShowSortMenu) {
                setIsToggled(false);
            }
        };

        window.addEventListener('click', handleClickOutside);

        return () => {
            window.removeEventListener('click', handleClickOutside);
        };
    }, []);




    return (
        <div className="selector-filter-container">
            <p className='selected-sort-option' onClick={handleToggle}>{selectedFilterOption}
                <button className="filter-arrow-button">
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
};

export default React.memo(HeaderSelectorToFilter);

