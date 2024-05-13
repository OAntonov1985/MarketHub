// "use client"
import { connectMongoDB } from "../../../config/mongodb";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import mongoose from "mongoose";

const authOptions = {
    providers: [
        process.env.VERCEL_ENV === "preview",
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
        })
    ],
    callbacks: {
        async signIn({ user, account }) {
            if (account.provider === "google") {
                const { name, email } = user;

                const userInf0 = {
                    name: name.split(' ')[0],
                    surname: name.split(' ')[1],
                    nameAs: {
                        nameAs: name.split(' ')[0],
                        surnameAs: name.split(' ')[1],
                    },
                    email,
                    userOrders: {},
                    userProductsToSale: {}
                }

                try {
                    await connectMongoDB();
                    const userExists = await mongoose.connection.collection("users").findOne({ email });

                    if (!userExists) {
                        await mongoose.connection.collection("users").insertOne(userInf0);
                        console.log("User saved successfully:", userInf0);
                    }

                    return user;
                } catch (error) {
                    console.error("Error processing signIn callback:", error);
                }
            }
            else if (account.provider === "facebook") {
                const { name, email } = user;

                const userInf0 = {
                    name: name.split(' ')[0],
                    surname: name.split(' ')[1],
                    nameAs: {
                        nameAs: name.split(' ')[0],
                        surnameAs: name.split(' ')[1],
                    },
                    email,
                    userOrders: {},
                    userProductsToSale: {}
                }

                try {
                    await connectMongoDB();
                    const userExists = await mongoose.connection.collection("users").findOne({ email });

                    if (!userExists) {
                        await mongoose.connection.collection("users").insertOne(userInf0);
                        console.log("User saved successfully:", userInf0);
                    }

                    return user;
                } catch (error) {
                    console.error("Error processing signIn callback:", error);
                }
            }
            return user;
        }
    },
    secret: process.env.NEXTAUTN_SECRET
};


export default NextAuth(authOptions);



// {
//     status: 'connected',
//     authResponse: {
//         accessToken: '...',
//         expiresIn:'...',
//         signedRequest:'...',
//         userID:'...'
//     }
// }