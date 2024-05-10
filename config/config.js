import GoogleProvider from 'next-auth/providers/google'
import FacebookProvider from "next-auth/providers/facebook";
// import { users } from '../config/user';

export const authConfig = {
    providers: [
        GoogleProvider({
            clientId: "169414495987-jg3qi1n4e0n5d07nf6nrp5km4jmq5asf.apps.googleusercontent.com",
            clientSecret: "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",
        })

    ],
    cookies: true
}


