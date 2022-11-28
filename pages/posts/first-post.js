import Link from 'next/link';
import ProfileImage from './personal-image';
import Head from 'next/head';

export default function FirstPost() {
    return (
        <>
            <Head>
                <title>First Post</title>
            </Head>
            <h1>Fist Post</h1>
            <h2>
                <Link href="/">Back to the Home</Link>
            </h2>
            <ProfileImage></ProfileImage>
        </>
    );
}