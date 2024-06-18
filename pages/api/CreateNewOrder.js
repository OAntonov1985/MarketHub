import { MaketHubURL } from '@/components/Constants';

export default async function CreateNewOrder(body) {
    let result;

    try {
        const response = await fetch(MaketHubURL + `newOrder`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        });
        if (response.ok) {
            const data = await response.json();
            result = data;
        } else {
            throw new Error('Упс.... Щось пішло не так. зверніться до розробників');
        }
    } catch (error) {
        console.error(error);
        throw new Error('Упс.... Щось пішло не так. зверніться до розробників');
    }
    return { result };
}
