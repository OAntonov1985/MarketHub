export default function formattedPrice(price) {
    const priceString = price.toString();

    if (priceString.includes('.') || priceString.includes(',')) {
        return priceString;
    }

    let newPrice;

    if (priceString.length > 3) {
        newPrice = priceString.split('');
        newPrice.splice(-3, 0, ' ');
    } else {
        return priceString;
    }
    return newPrice.join('');
};