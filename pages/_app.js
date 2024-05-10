import "@/styles/globals.css";
import { Ubuntu, Poppins } from 'next/font/google';
import React from 'react';
import { store } from "../store/store";
import { Provider } from 'react-redux';
import { SessionProvider } from "next-auth/react"





const ubuntu = Ubuntu({
    subsets: ['cyrillic'],
    weight: ["300", "400", "500", '700'],
})

const poppins = Poppins({
    subsets: ['latin'],
    weight: ["300", "400", "500", '700'],
});
function MyApp({ Component, pageProps: { session, ...pageProps } }) {
    // console.log(session)

    return (
        <>

            <Provider store={store}>
                <SessionProvider session={session}>
                    <div className={ubuntu.className}>
                        <Component {...pageProps} />
                    </div>
                </SessionProvider>
            </Provider>

        </>
    )
}


export default MyApp;
