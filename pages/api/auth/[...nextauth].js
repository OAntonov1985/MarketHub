"use client"
import { connectMongoDB } from "../../../config/mongodb";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import Credentials from "next-auth/providers/credentials";
import mongoose from "mongoose";
import { serialize } from 'cookie';



const authOptions = (req, res) => {
    return {
        session: {
            strategy: "jwt",
        },
        providers: [
            process.env.VERCEL_ENV === "preview",
            GoogleProvider({
                name: "google",
                clientId: process.env.GOOGLE_CLIENT_ID,
                clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            }),
            FacebookProvider({
                name: "facebook",
                clientId: process.env.FACEBOOK_CLIENT_ID,
                clientSecret: process.env.FACEBOOK_CLIENT_SECRET
            }),
            Credentials({
                name: "credentials",
                async authorize(credentials) {
                    const { email, password } = credentials;
                    try {
                        await connectMongoDB();
                        const userExists = await mongoose.connection.collection("users").findOne({ email, password });

                        if (userExists.email == email && userExists.password == password) {
                            return userExists;
                        }
                        else if (userExists.email == email && userExists.password !== password) {
                            return null
                        }
                        else if (!userExists) {
                            return new Error("Користувача з такою поштою не знайдено.")
                        }
                        return null;
                    } catch (error) {
                        console.error("Error processing signIn callback:", error);
                    }
                    return null
                }
            })
        ],

        callbacks: {
            async signIn({ user, account }) {
                if (account.provider === "google" || account.provider === "facebook") {
                    const { name, email } = user;
                    // const customArg = context.query.customArg;
                    // console.log(customArg)
                    // console.log(profile)
                    const userInf0 = {
                        name: name.split(' ')[0],
                        surname: name.split(' ')[1],
                        nameAs: {
                            nameAs: name.split(' ')[0],
                            surnameAs: name.split(' ')[1],
                        },
                        email,
                        userOrders: {},
                        userProductsToSale: {},
                        password: "password",
                        pfone: ""
                    }

                    try {
                        await connectMongoDB();
                        const userExists = await mongoose.connection.collection("users").findOne({ email });

                        if (userExists) {
                            // console.log(userExists)
                            const { nameAs, email, password, pfone } = userExists;
                            const cookies = [
                                serialize('userName', nameAs.nameAs, { path: '/' }),
                                serialize('userSurname', nameAs.surnameAs, { path: '/' }),
                                serialize('userEmail', email, { path: '/' }),
                                serialize('userPassword', password, { path: '/' }),
                                serialize('userToken', account.access_token, { path: '/' }),
                                pfone.length > 0 ? serialize('userPhone', pfone, { path: '/' }) : null
                            ];

                            res.setHeader('Set-Cookie', cookies);
                            return userExists;
                        }
                        else if (!userExists) {
                            await mongoose.connection.collection("users").insertOne(userInf0);
                            return userInf0;
                            // return null;
                        }
                        return null;
                    } catch (error) {
                        console.error("Error processing signIn callback:", error);
                    }
                    // return user;
                }
                // else if (account.provider === "google1") {
                //     const { name, email } = user;
                //     console.log("google1")


                //     const userInf0 = {
                //         name: name.split(' ')[0],
                //         surname: name.split(' ')[1],
                //         nameAs: {
                //             nameAs: name.split(' ')[0],
                //             surnameAs: name.split(' ')[1],
                //         },
                //         email,
                //         userOrders: {},
                //         userProductsToSale: {},
                //         password: "password",
                //         pfone: ""
                //     }

                //     try {
                //         await connectMongoDB();
                //         const userExists = await mongoose.connection.collection("users").findOne({ email });

                //         if (userExists) {
                //             return null;

                //         }
                //         else if (!userExists) {
                //             await mongoose.connection.collection("users").insertOne(userInf0);
                //             return userInf0;
                //             // return userExists;
                //         }
                //         return null;
                //     } catch (error) {
                //         console.error("Error processing signIn callback:", error);
                //     }
                //     return userInf0;
                // }


            },
        },
        // pages: {
        //     signIn: '/loginpage',
        //     error: '/error'
        // },
        secret: process.env.NEXTAUTN_SECRET
    };

}


export default (req, res) => {
    return NextAuth(req, res, authOptions(req, res));
};