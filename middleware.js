import { NextResponse } from 'next/server';

export default function middleware(req) {
    let token = req.cookies.get('next-auth.session-token');
    // console.log(token)
    let urlAdress = req.url;
    if (!token && urlAdress.includes('/userpage')) {
        return NextResponse.redirect('https://market-hub-sigma.vercel.app/loginpage')
        // return NextResponse.redirect('http://localhost:3000/loginpage')
    }
}