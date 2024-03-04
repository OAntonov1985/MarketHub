import { MaketHubURL } from "../../components/Constants";

export default async function GetFilteredData(event, id, index, subCategoryName) {
    let result;
    try {
        const response = await fetch(MaketHubURL + `goods/${subCategoryName ? "subcategories" : "categories"}/${id}/${index}/${isNaN(event) ? 0 : event}/12`,
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

