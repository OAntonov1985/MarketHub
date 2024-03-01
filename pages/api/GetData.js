import { MaketHubURL } from "../../components/Constants";

export default async function GetdData(event, id, subCategoryName) {
    // console.log(subCategoryName)
    let result
    // console.log(MaketHubURL + `goods/${subCategoryName ? "subcategories" : "categories"}/${id}/${event}/12`)
    try {
        // console.log(subCategoryName)categories
        const response = await fetch(MaketHubURL + `goods/${subCategoryName ? "subcategories" : "categories"}/${id}/${event}/12`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.ok) {
            const data = await response.json();
            result = data;

        } else {
            throw new Error('Упс.... Щось пішло не так. зверніться до розробників');
        }
    } catch (error) {
        throw new Error('Упс.... Щось пішло не так. зверніться до розробників');
    }
    return { result }
}