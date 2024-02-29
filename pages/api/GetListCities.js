export default async function GetListCities(cityName) {
    let dataCities = [];
    const API_KEY_NOVA = process.env.NEXT_PUBLIC_API_KEY_NOVA;

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            apiKey: API_KEY_NOVA,
            modelName: 'Address',
            calledMethod: 'searchSettlements',
            methodProperties: {
                CityName: cityName,
                Limit: '10',
                Page: '1'
            }
        })
    };

    try {
        const response = await fetch('https://api.novaposhta.ua/v2.0/json/', requestOptions);
        if (response.ok) {
            const data = await response.json();
            if (data.success === true) {
                dataCities = data;
            }
        }
        else {
            alert('Упс.... Щось пішло не так');
        };

    } catch (error) {
        alert('Упс.... Щось пішло не так');
    }
    return { dataCities }
}