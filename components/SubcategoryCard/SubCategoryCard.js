import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


function SubCategotyCard({ subCategories }) {
    // console.log(subCategories)
    const category = subCategories.parent_category_name;
    const subcategory = subCategories.sub_category_name;
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
                        src={subCategories.thumbnail}
                        sizes="(max-width: 100%)"
                        quality={100}
                        fill
                        style={{
                            objectFit: 'contain',
                            width: '100%'

                        }}
                    />
                </div>

            </Link>
            <p className='main-item-title'>{subCategories.sub_category_name}</p>
        </div>
    )
};

export default React.memo(SubCategotyCard);

