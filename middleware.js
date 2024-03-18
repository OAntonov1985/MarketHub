import { NextResponse } from 'next/server';
// import { useSelector } from 'react-redux';

export default function middleware(req) {
    let token = req.cookies.get('jwtToken');
    // let { userName } = useSelector((state) => state.user);
    // console.log(token)
    let urlAdress = req.url;
    if (!token && urlAdress.includes('/userpage')) {
        return NextResponse.redirect(new URL('/loginpage', req.url))
    }

}