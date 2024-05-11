// import GoogleProvider from 'next-auth/providers/google'
// import FacebookProvider from "next-auth/providers/facebook";
// // import { users } from '../config/user';

// export const authConfig = {
//     providers: [
//         GoogleProvider({
//             clientId: process.env.GOOGLE_CLIENT_ID,
//             clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//             authorization: {
//                 params: {
//                     scope: "openid email profile https://www.googleapis.com/auth/drive.file" // Объединяем scope
//                 }
//             },
//             idToken: true, // Включаем получение idToken
//             checks: ["pkce", "state"],
//             profile(profile) {
//                 return {
//                     id: profile.sub,
//                     name: profile.name,
//                     email: profile.email,
//                     image: profile.picture,
//                 }
//             },
//         }),
//     ],
//     cookies: true
// }


// // FacebookProvider({
// //     clientId: process.env.FACEBOOK_CLIENT_ID,
// //     clientSecret: process.env.FACEBOOK_CLIENT_SECRET
// // })


