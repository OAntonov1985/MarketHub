import { MaketHubURL } from "../../components/Constants";

export default async function SetOrderStatus(id, userOrders, orderStatus) {
    let result;

    try {
        const response = await fetch(MaketHubURL + `setOrderStatus/${id}/${userOrders}/${orderStatus}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            const data = await response.json();
            result = data;

        } else {
            result = data;
            throw new Error('Упс.... Щось пішло не так. зверніться до розробників');
        }
    } catch (error) {
        throw new Error('Упс.... Щось пішло не так. зверніться до розробників');
    }
    return { result }
}