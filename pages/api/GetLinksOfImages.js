import { MaketHubURL } from "../../components/Constants";

export default async function GetLinksOfImages(id) {

    try {
        // const response = await fetch(MaketHubURL + `imagelist/U0900895`, {
        const response = await fetch(MaketHubURL + `imagelist/${id}`, {
            method: 'GET',
        });
        if (response.ok) {
            const data = await response.json();
            // console.log(data);
            return data;

        } else {
            throw new Error('Упс.... Щось пішло не так. зверніться до розробників');
        }
    } catch (error) {
        throw new Error('Упс.... Щось пішло не так. зверніться до розробників');
    }
}