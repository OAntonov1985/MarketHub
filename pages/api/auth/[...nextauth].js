// 

// import { authConfig } from '../../../config/config';
// import NextAuth from 'next-auth'

// export default (req, res) => NextAuth(req, res, authConfig);

import GoogleProvider from 'next-auth/providers/google'

import NextAuth from "next-auth"

export const authOptions = {
    // secret: process.env.NEXTAUTN_SECRET,
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            checks: ['none'],
            cookies: true
        }),

    ],
    cookies: true
}
export default NextAuth(authOptions)