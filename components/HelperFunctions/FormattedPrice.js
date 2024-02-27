export default function formattedPrice(price) {
    const num = parseInt(price)
    const priceString = num.toFixed(2);
    const parts = priceString.split('.');
    const integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");

    if (parts[1] === '00') {
        return integerPart;
    } else {
        return integerPart + '.' + parts[1];
    }
};