import { MaketHubURL } from "../../components/Constants";
export default async function GetSearchResultInPage(searchPhrase, activePage, sortIndex, min, max, brandsToFilter, isAvailabale) {
    let result;
    try {
        const params = new URLSearchParams();
        if (sortIndex === 1 || sortIndex === -1) params.append('sortIndex', sortIndex);
        if (activePage !== 0) {
            params.append('skip', activePage);
        }
        else params.append('skip', 0);

        if (min !== null) params.append('min', min);
        if (max !== null) params.append('max', max);

        if (brandsToFilter && brandsToFilter.length !== 0) {
            brandsToFilter.forEach(brand => {
                params.append('brend', brand);
            });
        }
        if (isAvailabale && isAvailabale === true) params.append('isAvailable', true);

        const response = await fetch(MaketHubURL + `searchPage/${searchPhrase}` + '?' + params.toString(),
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
        if (response.ok) {
            const data = await response.json();
            result = data;
        } else {
            throw new Error('Ошибка при получении данных');
        }
    } catch (error) {
        throw new Error('Упс.... Щось пішло не так. зверніться до розробників');
    }
    return { result };
} 