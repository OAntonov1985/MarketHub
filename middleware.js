import { NextResponse } from 'next/server'

export function middleware(request) {
    let token = request.cookies.get('jwtToken');
    if (!token && request.nextUrl.pathname.startsWith('/userpage')) {
        return NextResponse.rewrite(new URL('/loginpage', request.url))
    }
}