import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainPage from '../pages/MainPage';
import UserPage from '../pages/UserPage';
import OneProductPage from '../pages/OneProductPage';
import ProductsPage from '../pages/ProductsPage';
import LogInPage from '../pages/LogInPage';
import Footer from './Footer';

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