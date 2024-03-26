import "@/styles/globals.css";
import { Ubuntu, Poppins } from 'next/font/google';
import React from 'react';
import { store } from "../store/store";
import { Provider } from 'react-redux';






const ubuntu = Ubuntu({
    subsets: ['cyrillic'],
    weight: ["300", "400", "500", '700'],
})

const poppins = Poppins({
    subsets: ['latin'],
    weight: ["300", "400", "500", '700'],
});
function MyApp({ Component, pageProps }) {

    return (
        <>
            <Provider store={store}>
                <div className={ubuntu.className}>
                    <Component {...pageProps} />
                </div>
            </Provider>
        </>
    )
}


export default MyApp;
