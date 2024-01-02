import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Error404() {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 3000);
    }, [router]);
    return <>Упс. Щось пішло не так. Сторінка не знайдена</>;
}
