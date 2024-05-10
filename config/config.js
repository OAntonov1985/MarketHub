import GoogleProvider from 'next-auth/providers/google';

export const authConfig = {

    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            secret: process.env.NEXTAUTH_SECRET,
            authorization: {
                params: {
                    scope: 'openid profile email offline_access read:products'
                }
            }
        })
    ],
    cookies: true
}


