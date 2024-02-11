'use server'

import { cookies } from 'next/headers'

export async function addGood() {
    // Get cookie
    const value = cookies().get('name')?.value

    // Set cookie
    cookies().set('name', 'Delba')

    // Delete cookie
    cookies().delete('name')
}