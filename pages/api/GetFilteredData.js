import { MaketHubURL } from "../../components/Constants";

export default async function GetFilteredData(id, sortIndex, event, min, max, brands) {
    let result;
    console.log(id)
    console.log(sortIndex)
    console.log(min)
    console.log(max)
    console.log(event)
    // sortIndex = isNaN(sortIndex) ? undefined : parseInt(sortIndex);
    try {
        const params = new URLSearchParams();
        if (sortIndex === 1 && sortIndex === -1) params.append('sortIndex', sortIndex);
        params.append('skip', 0);
        if (min !== undefined && min !== '') params.append('min', min);
        if (max !== undefined && max !== '') params.append('max', max);

        if (brands !== undefined && brands !== '') {
            brands.forEach(brand => params.append('brend', brand.toUpperCase()));
        }
        console.log(params)
        console.log(MaketHubURL + `goods/categories/${id}` + '?' + params.toString())
        const response = await fetch(MaketHubURL + `goods/categories/${id}` + '?' + params.toString(),
            // const response = await fetch(MaketHubURL + `goods/${subCategoryName ? "subcategories" : "categories"}/${id}/${index}/${isNaN(event) ? 0 : event}/12`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
        // console.log(MaketHubURL + `goods/${subCategoryName ? "subcategories" : "categories"}/${id}/${index}/${isNaN(event) ? 0 : event}/12`)
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

