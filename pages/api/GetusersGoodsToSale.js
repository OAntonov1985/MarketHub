import { MaketHubURL } from "../../components/Constants";

export default async function GetusersGoodsToSale(id, activePage, isActive) {
    let result;

    try {
        const params = new URLSearchParams();
        if (typeof isActive !== 'undefined') {
            params.append('isActive', isActive);
        }

        const response = await fetch(MaketHubURL + `users/usergoods/${id}/${activePage}/6` + (params.toString() !== '' ? '?' + params.toString() : ''), {
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