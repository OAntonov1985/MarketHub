import { MaketHubURL } from "../../components/Constants";

export default async function AddNewGood(formData) {
    let result;
    // console.log(formData)

    try {
        const response = await fetch(MaketHubURL + `createnewgood`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            const data = await response.json();
            result = data;
            // console.log(data);

        } else {
            throw new Error('Упс.... Щось пішло не так. Зверніться до розробників');
        }
    } catch (error) {
        throw new Error('Упс.... Щось пішло не так. Зверніться до розробників');
    }
    return { result }
}