const login = async (userEmail, userPassword) => {
    const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "email": userEmail,
            "password": userPassword,
        }),
    });

    if (response.ok) {
        const data = await response.json();
        console.log(data.token)
        console.log(data)
        return data.token; // предполагаем, что сервер возвращает токен в поле 'token'
    } else {
        throw new Error('Authentication failed');
    }
};

export default login;