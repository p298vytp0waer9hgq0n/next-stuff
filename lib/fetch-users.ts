export default async function fetchUsers () {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!res.ok) throw new Error('failed to fetch users');

    return res.json();
}
