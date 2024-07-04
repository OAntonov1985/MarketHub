import { MaketHubURL } from "../../components/Constants";

export default async function GetUsersOrders(id) {
    let result;

    try {
        const response = await fetch(MaketHubURL + `getUserOrders/${id}`, {
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

