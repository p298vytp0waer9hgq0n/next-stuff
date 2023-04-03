import Link from "next/link";

export default function About () {
    if (Math.random() > .5) throw new Error('Not today!');
    return (
        <>
            <h1>About!</h1>
            <Link href="/">Home Page</Link>
        </>
    )
}