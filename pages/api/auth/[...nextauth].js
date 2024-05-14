// "use client"
import { connectMongoDB } from "../../../config/mongodb";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import mongoose from "mongoose";

const authOptions = {
    session: {
        strategy: "jwt",
    },
    providers: [
        process.env.VERCEL_ENV === "preview",
        GoogleProvider({
            name: "google",
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
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
            if (account.provider === "google") {
                const { email } = user;

                try {
                    await connectMongoDB();
                    const userExists = await mongoose.connection.collection("users").findOne({ email });

                    if (userExists) {
                        return userExists;
                    }
                    else if (!userExists) {
                        return null
                    }
                    return null;
                } catch (error) {
                    console.error("Error processing signIn callback:", error);
                }
            }

            return user;
        },
    },
    pages: {
        signIn: '/loginpage'
    },
    secret: process.env.NEXTAUTN_SECRET
};


export default NextAuth(authOptions);



