import BreadCrumps from '@/components/Breadcrumps/Breadcrumps';
import GoodsList from '@/components/GoodsList/GoodsList';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

export default function SubCategoryPage({ goods }) {
    console.log(goods)
    return (
        <div className='subcategory-page'>
            <Header />
            <div className="subcategory-main-content">
                <BreadCrumps />
                <GoodsList props={goods} />
            </div>
            <Footer />
        </div>
    )
};

export async function getServerSideProps(context) {
    const resGoods = await fetch(`https://fakestoreapi.com/products`);
    const goods = await resGoods.json();

    return {
        props: {
            goods
        }
    };
};