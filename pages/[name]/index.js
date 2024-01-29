import Link from "next/link";
import { URLADRESS } from '@/components/Constants';
import Image from 'next/image';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import SubcategoriesInCatPage from '@/components/SubCategoriesInCategoryPage/SubCategoriesInCategoryPage';

function ProductsPage({ subCategories }) {
    // console.log(subCategories)

    // const url = `categories/${subCategories.parent_id}/sub-categories`;
    return (
        <>
            <div className='category-page'>
                <Header />
                <div className="category-main-content">
                    <div className='theWay'>
                        <div className="logo-bread-crum">
                            <Image
                                alt="logo home"
                                src='/breadcrum/home-outline.svg'
                                quality={100}
                                width={16}
                                height={16}
                            />
                        </div>
                        <p className='bread-crum-text-way'>/Каталог</p>
                    </div>
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
    const { categoryId } = context.query;
    console.log(categoryId)
    const res = await fetch(URLADRESS + 'categories/100/sub-categories');
    // const res = await fetch(`${URLADRESS}categories/${categoryId}/sub-categories`);

    const subCategories = await res.json();
    // console.log(subCategories)
    return {
        props: {
            subCategories
        }
    };
}
export default ProductsPage