import Link from "next/link";
import fetchUsers from "../api/fetch-users";

export const metadata = {
    title: 'Users'
}

type User = {
    id: string;
    name: string;
}

export default async function UsersPage () {
    const res = await fetchUsers();
    const users = res.map((user: User) => {
        return (
            <li key={user.id}>
                <Link href={`/users/${user.id}`}>{user.name}</Link>
            </li>
        );
    })
    return (
        <>
            <h1>Users!</h1>
            <Link href="/">Back Home</Link>
            <ul>
                {users}
            </ul>
        </>
    );
}