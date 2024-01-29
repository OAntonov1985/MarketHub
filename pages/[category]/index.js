import { URLADRESS } from '@/components/Constants';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import SubcategoriesInCatPage from '@/components/SubCategoriesInCategoryPage/SubCategoriesInCategoryPage';
import BreadCrumps from '@/components/Breadcrumps/Breadcrumps';

function CategoryPage({ subCategories }) {

    return (
        <>
            <div className='category-page'>
                <Header />
                <div className="category-main-content">
                    <BreadCrumps />
                    <div className="subcategories-row">
                        <SubcategoriesInCatPage subCategories={subCategories} />
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}
export async function getServerSideProps(context) {
    let id
    if (context.query.category === "Комп’ютерна техніка") id = 100
    else if (context.query.category === "Мобільні телефони") id = 175
    else if (context.query.category === "Побутова техніка") id = 250
    else if (context.query.category === "Ігрові приставки") id = 325
    else if (context.query.category === "Аудіотехніка") id = 400


    const res = await fetch(URLADRESS + `categories/${id}/sub-categories`);
    // const res = await fetch(`${URLADRESS}categories/${categoryId}/sub-categories`);

    const subCategories = await res.json();
    return {
        props: {
            subCategories
        }
    };
};
export default CategoryPage;