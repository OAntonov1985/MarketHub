export default function handler(req, res) {
    // Получаем данные из запроса, отправленные из клиента
    const { basketData } = req.body;

    // Возвращаем данные в ответ на запрос
    res.status(200).json(basketData);
}