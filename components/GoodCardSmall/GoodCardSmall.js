import Image from 'next/image';
import Link from 'next/link';


export default function GoodCardSmall({ props }) {
    const { id, photo_preview, name, price, available, category_id, sub_category_id, title, images } = props;
    // console.log(props)

    function formattedPrice(price) {
        let newPrice
        if (price.toString().length === 4) {
            newPrice = price.toString().split('');
            newPrice.splice(1, 0, ' ');
        }
        else if (price.toString().length === 5) {
            newPrice = price.toString().split('');
            newPrice.splice(2, 0, ' ');
        }
        return newPrice
    }


    return (
        <>
            <Link
                // href="/[category]/[subcategory]/[id]" as={`/${category_id}/${sub_category_id}/${id}`}
                href="/[category]/[subcategory]/[id]" as={`/${id}/${title}/${id}`}
                // href="/[name]/[id]"
                key={id} className="top-sellers-item">
                <div className="image-container-top-sellers">
                    <div className="container-for-imafe-top-sellers">
                        <Image
                            alt="image of good"
                            // src={photo_preview}
                            src={images[0]}
                            quality={100}
                            fill
                            style={{
                                objectFit: 'contain',
                                width: '100%'

                            }}
                        />
                    </div>
                </div>
                {/* <p className='top-sellers-item-title'>{name}</p> */}
                <p className='top-sellers-item-title'>{title}</p>
                <div className='top-sellers-prise-and-availability'>
                    {/* <p className='top-sellers-price'>{formattedPrice(price)} грн</p> */}
                    <p className='top-sellers-price'>{price} грн</p>
                    {/* <p className={`top-sellers-availability ${available ? '' : 'noavailability'}`}> */}
                    <p className={`top-sellers-availability ${id ? '' : 'noavailability'}`}>
                        {/* {available === true ? "Є в наявності" : "Немає в наявності"} */}
                        {id !== undefined ? "Є в наявності" : "Немає в наявності"}
                    </p>
                </div>
            </Link>
        </>
    );
};