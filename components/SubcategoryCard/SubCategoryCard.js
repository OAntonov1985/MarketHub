import Image from 'next/image';
import Link from 'next/link';


export default function SubCategotyCard({ subCategories }) {
    // console.log(subCategories)
    const category = subCategories.parent;
    const subcategory = subCategories.name;
    return (
        <div key={subCategories.id} className="main-categories-row-two">
            <Link

                // href={subCategories.name}
                // href={`/${category}/${subcategory}`}
                href="/[category]/[subcategory]" as={`/${category}/${subcategory}`}
                key={subCategories.id}
                id={subCategories.id} >
                <div className="image-container">
                    <Image
                        alt="image of computer"
                        // src={subCategories.photo_preview}
                        src="/ItemImage/pfones.png"
                        quality={100}
                        fill
                        style={{
                            objectFit: 'contain',
                            width: '100%'

                        }}
                    />
                </div>

            </Link>
            <p className='main-item-title'>{subCategories.name}</p>
        </div>
    )
};

// 

