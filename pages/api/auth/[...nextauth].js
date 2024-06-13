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

                        if (!mongoose.connection.readyState) {
                            throw new Error("Помилка підключення до бази даних");
                        }
                        const userExists = await mongoose.connection.collection("users").findOne({ email });
                        if (userExists) {
                            if (userExists.email === email && userExists.password === password) {
                                const { nameAs, email, password, pfone } = userExists;
                                console.log(nameAs.nameAs)
                                const cookies = [
                                    serialize('userName', nameAs.nameAs, { path: '/' }),
                                    serialize('userSurname', nameAs.surnameAs, { path: '/' }),
                                    serialize('userEmail', email, { path: '/' }),
                                    serialize('userPassword', password, { path: '/' }),
                                    // serialize('userToken', token, { path: '/' }),
                                    // pfone.length > 0 ? serialize('userPhone', pfone, { path: '/' }) : null
                                ].filter(Boolean);

                                res.setHeader('Set-Cookie', cookies);
                                return userExists;
                            } else {
                                console.log("Помилка авторизакії!");
                                return null;
                            }
                        } else {
                            console.log("Authorization failed: user not found");
                            return null;
                        }
                    } catch (error) {
                        console.error("Error in authorize function:", error);
                        throw new Error("An error occurred while processing your request.");
                    }
                }
            })
        ],


        callbacks: {
            async signIn({ user, account }) {
                if (account.provider === "google" || account.provider === "facebook") {
                    const { name, email } = user;
                    // const userInf0 = {
                    //     name: name.split(' ')[0],
                    //     surname: name.split(' ')[1] || '',
                    //     nameAs: {
                    //         nameAs: name.split(' ')[0],
                    //         surnameAs: name.split(' ')[1] || '',
                    //     },
                    //     email,
                    //     userOrders: {},
                    //     userProductsToSale: {},
                    //     password: "password",
                    //     pfone: ""
                    // };

                    try {
                        await connectMongoDB();
                        const userExists = await mongoose.connection.collection("users").findOne({ email });

                        if (userExists) {
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

                        } else {
                            return null;
                        }
                    } catch (error) {
                        console.error("Error processing signIn callback:", error);
                        return null;
                    }
                }
                return true;
            },
        },
        secret: process.env.NEXTAUTH_SECRET
    };
    secret: process.env.NEXTAUTH_SECRET
};




export default (req, res) => {
    return NextAuth(req, res, authOptions(req, res));
};



// "use client";
// import { connectMongoDB } from "../../../config/mongodb";
// import NextAuth from "next-auth/next";
// import GoogleProvider from "next-auth/providers/google";
// import FacebookProvider from "next-auth/providers/facebook";
// import Credentials from "next-auth/providers/credentials";
// import mongoose from "mongoose";
// import { serialize } from 'cookie';


// const authOptions = (req, res) => {
//     return {
//         session: {
//             strategy: "jwt",
//         },
//         providers: [
//             GoogleProvider({
//                 name: "google",
//                 clientId: process.env.GOOGLE_CLIENT_ID,
//                 clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//             }),
//             FacebookProvider({
//                 name: "facebook",
//                 clientId: process.env.FACEBOOK_CLIENT_ID,
//                 clientSecret: process.env.FACEBOOK_CLIENT_SECRET
//             }),
//             Credentials({
//                 name: "credentials",
//                 async authorize(credentials) {
//                     const { email, password } = credentials;
//                     try {
//                         await connectMongoDB();

//                         if (!mongoose.connection.readyState) {
//                             throw new Error("Помилка підключення до бази даних");
//                         }
//                         const userExists = await mongoose.connection.collection("users").findOne({ email });
//                         if (userExists) {
//                             if (userExists.email === email && userExists.password === password) {
//                                 const { nameAs, email, password, pfone } = userExists;
//                                 const cookies = [
//                                     serialize('userName', nameAs.nameAs, { path: '/' }),
//                                     serialize('userSurname', nameAs.surnameAs, { path: '/' }),
//                                     serialize('userEmail', email, { path: '/' }),
//                                     serialize('userPassword', password, { path: '/' }),
//                                     // serialize('userToken', token, { path: '/' }),
//                                     pfone.length > 0 ? serialize('userPhone', pfone, { path: '/' }) : null
//                                 ].filter(Boolean);

//                                 res.setHeader('Set-Cookie', cookies);
//                                 return userExists;
//                             } else {
//                                 console.log("Помилка авторизакії!");
//                                 return null;
//                             }
//                         } else {
//                             console.log("Authorization failed: user not found");
//                             return null;
//                         }
//                     } catch (error) {
//                         console.error("Error in authorize function:", error);
//                         throw new Error("An error occurred while processing your request.");
//                     }
//                 }
//             })
//         ],

//         callbacks: {
//             async signIn({ user, account }) {
//                 if (account.provider === "google" || account.provider === "facebook") {
//                     const { name, email } = user;
//                     // const userInf0 = {
//                     //     name: name.split(' ')[0],
//                     //     surname: name.split(' ')[1] || '',
//                     //     nameAs: {
//                     //         nameAs: name.split(' ')[0],
//                     //         surnameAs: name.split(' ')[1] || '',
//                     //     },
//                     //     email,
//                     //     userOrders: {},
//                     //     userProductsToSale: {},
//                     //     password: "password",
//                     //     pfone: ""
//                     // };

//                     try {
//                         await connectMongoDB();
//                         const userExists = await mongoose.connection.collection("users").findOne({ email });

//                         if (userExists) {
//                             const { nameAs, email, password, pfone } = userExists;
//                             const cookies = [
//                                 serialize('userName', nameAs.nameAs, { path: '/' }),
//                                 serialize('userSurname', nameAs.surnameAs, { path: '/' }),
//                                 serialize('userEmail', email, { path: '/' }),
//                                 serialize('userPassword', password, { path: '/' }),
//                                 serialize('userToken', account.access_token, { path: '/' }),
//                                 pfone.length > 0 ? serialize('userPhone', pfone, { path: '/' }) : null
//                             ];

//                             res.setHeader('Set-Cookie', cookies);
//                             return userExists;

//                         } else {
//                             return null;
//                         }
//                     } catch (error) {
//                         console.error("Error processing signIn callback:", error);
//                         return null;
//                     }
//                 }
//                 return true;
//             },
//         },
//         secret: process.env.NEXTAUTH_SECRET
//     };
// };

// export default (req, res) => {
//     return NextAuth(req, res, authOptions(req, res));
// };
