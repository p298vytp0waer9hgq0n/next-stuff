import Link from "next/link";
import fetchUsers from "@/lib/fetch-users";

// import { User } from "@/lib/constants";

export type User = {
    id: string;
    name: string;
}

export const metadata = {
    title: 'Users'
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
