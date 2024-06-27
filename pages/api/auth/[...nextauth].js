"use client"
import { connectMongoDB } from "../../../config/mongodb";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import Credentials from "next-auth/providers/credentials";
import mongoose from "mongoose";
import { serialize } from 'cookie';


const findOrCreateUser = async (user) => {
    await connectMongoDB();
    const { name, email } = user;

    const userExists = await mongoose.connection.collection("users").findOne({ email });

    if (userExists) {
        return userExists;
    } else {
        return null;
    }
};

const setCookies = (user, account, res) => {
    const { id, nameAs, email, password, pfone } = user;
    const cookies = [
        serialize('userID', id, { path: '/' }),
        serialize('userName', nameAs.nameAs, { path: '/' }),
        serialize('userSurname', nameAs.surnameAs, { path: '/' }),
        serialize('userEmail', email, { path: '/' }),
        serialize('userPassword', password, { path: '/' }),
        serialize('userToken', account.access_token, { path: '/' }),
        serialize('userPhone', pfone, { path: '/' })
    ];
    res.setHeader('Set-Cookie', cookies);
};



const authOptions = (req, res) => {
    return {
        session: {
            strategy: "jwt",
        },
        providers: [
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
                        const userExists = await mongoose.connection.collection("users").findOne({ email });

                        if (userExists.email === email && userExists.password === password) {
                            const { id, nameAs, email, password, pfone } = userExists;
                            const cookies = [
                                serialize('userID', id, { path: '/' }),
                                serialize('userName', nameAs.nameAs, { path: '/' }),
                                serialize('userSurname', nameAs.surnameAs, { path: '/' }),
                                serialize('userEmail', email, { path: '/' }),
                                serialize('userPassword', password, { path: '/' }),
                                serialize('userPhone', pfone, { path: '/' })
                            ].filter(Boolean);

                            res.setHeader('Set-Cookie', cookies);
                            return userExists;
                        } else {
                            throw new Error("Invalid credentials");
                        }
                    } catch (error) {
                        console.error("Error processing signIn callback:", error);
                        throw error;
                    }
                }
            })
        ],

        callbacks: {
            async signIn({ user, account }) {
                try {
                    if (account.provider === "google" || account.provider === "facebook") {
                        const userExists = await findOrCreateUser(user);
                        if (res) {
                            setCookies(userExists, account, res);
                        }
                        return true;
                    }
                    return true;
                } catch (error) {
                    console.error("Error processing signIn callback:", error);
                    return false;
                }
            },
        },
        pages: {
            signIn: '/loginpage'
        },
        secret: process.env.NEXTAUTN_SECRET
    };

}


export default (req, res) => {
    return NextAuth(req, res, authOptions(req, res));
};