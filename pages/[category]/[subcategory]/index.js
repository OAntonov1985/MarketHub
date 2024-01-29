

export default function SubCategoryPage({ goods }) {
    console.log(goods)
    return (
        <>
            Subcategory
        </>
    )
};


export async function getServerSideProps(context) {
    // let id
    // if (context.query.category === "Комп’ютерна техніка") id = 100
    // else if (context.query.category === "Мобільні телефони") id = 175
    // else if (context.query.category === "Побутова техніка") id = 250
    // else if (context.query.category === "Ігрові приставки") id = 325
    // else if (context.query.category === "Аудіотехніка") id = 400


    const res = await fetch(`https://fakestoreapi.com/products/category/jewelery`);
    // const res = await fetch(`${URLADRESS}categories/${categoryId}/sub-categories`);

    const goods = await res.json();
    return {
        props: {
            goods
        }
    };
};