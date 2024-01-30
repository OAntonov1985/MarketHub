import Image from 'next/image';
import SubCategotyCard from '../SubcategoryCard/SubCategoryCard';


export default function SubcategoriesInCatPage({ subCategories }) {
    // console.log(subCategories)
    return (
        <div className='second-row second-row-modify'>
            {!!subCategories.length && subCategories.map(subCategories => {
                return (
                    <SubCategotyCard key={subCategories.id} subCategories={subCategories} />
                )
            })}
        </div>
    )


};

// export async function getServerSideProps(context) {
//     // let id
//     console.log(context)
//     // if (context.query.category === "Комп’ютерна техніка") id = 100
//     // else if (context.query.category === "Мобільні телефони") id = 175
//     // else if (context.query.category === "Побутова техніка") id = 250
//     // else if (context.query.category === "Ігрові приставки") id = 325
//     // else if (context.query.category === "Аудіотехніка") id = 400
//     // console.log(context.query.category)

//     // const res = await fetch(URLADRESS + `categories/${id}/sub-categories`);
//     // const res = await fetch(`${URLADRESS}categories/325/sub-categories`);
//     const res = await fetch(`https://markethub-mfbw.onrender.com/markethub/categories/325/sub-categories`);

//     const subCategories = await res.json();

//     return {
//         props: {
//             subCategories
//         }
//     };
// };

