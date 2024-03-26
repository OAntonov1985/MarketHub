import { MaketHubURL } from "../../components/Constants";

export default async function GetSearchResult(searchTerm) {
    let result;
    // console.log(searchTerm)
    try {
        const response = await fetch(MaketHubURL + `search/${searchTerm}`, {
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