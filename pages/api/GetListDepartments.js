export default async function GetListDepartments(departamentID) {
    let dataDepartment = [];
    const API_KEY_NOVA = process.env.NEXT_PUBLIC_API_KEY_NOVA;

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            "apiKey": API_KEY_NOVA,
            "modelName": "Address",
            "calledMethod": "getWarehouses",
            "methodProperties": {
                "CityRef": departamentID
            }
        })
    };

    try {
        const response = await fetch('https://api.novaposhta.ua/v2.0/json/', requestOptions);
        if (response.ok) {
            const data = await response.json();
            if (data.success === true) {
                dataDepartment = data;
            }
        }
        else {
            alert('Упс.... Щось пішло не так');
        };

    } catch (error) {
        alert('Упс.... Щось пішло не так');
    }
    return { dataDepartment }
}