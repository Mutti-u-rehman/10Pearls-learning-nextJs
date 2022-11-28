import Link from 'next/link';
import ProfileImage from './personal-image';

export default function FirstPost() {
    return (
        <>
            <h1>Fist Post</h1>
            <h2>
                <Link href="/">Back to the Home</Link>
            </h2>
            <ProfileImage></ProfileImage>
        </>
    );
}