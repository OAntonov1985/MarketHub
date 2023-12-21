import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainPage from '../../pages/MainPage/MainPage';
import UserPage from '../../pages/UserPage/UserPage';
import OneProductPage from '../../pages/OneProductPage/OneProductPage';
import ProductsPage from '../../pages/ProductsPage/ProductsPage';
import LogInPage from '../../pages/LogInPage/LogInPage';
import Footer from '../Footer/Footer';

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route exact path="/" element={<MainPage />} />
                    <Route path="/userpage" element={<UserPage />} />
                    <Route path="/authorization" element={<LogInPage />} />
                    <Route path="/productslist" element={<ProductsPage />} />
                    <Route path="/productslist/oneproductlist" element={<OneProductPage />} />
                </Routes>
                <Footer />
            </Router >
        </>
    );
}

export default App;