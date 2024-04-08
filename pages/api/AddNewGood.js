export default async function AddNewGood(formData) {
    try {
        const response = await fetch('https://market-hub-backend-dat4.vercel.app/createnewgood', {
            method: 'POST',
            body: formData,
            mode: "no-cors"
        });

        if (response.ok) {
            const data = await response.json();
            return { result: data };
        } else {
            throw new Error('Failed to add new good');
        }
    } catch (error) {
        console.error('Failed to add new good:', error);
        throw error;
    }
}