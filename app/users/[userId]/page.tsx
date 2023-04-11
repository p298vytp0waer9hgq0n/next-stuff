import fetchUser from '@/lib/fetch-user';
import getUserPosts from '@/lib/fetch-user-posts';

import { Post, User } from '@/lib/constants';

export const metadata = {
    title: 'User Profile'
}

type Params = {
    params: {
        userId: string
    }
}

export default async function UserPage ({ params: { userId }}: Params) {
    const userData: Promise<User> = fetchUser(userId);
    // const userPostsData: Promise<Post[]> = getUserPosts(userId);

    const [user] = await Promise.all([userData]);
    return (
        <h1>{user.name}</h1>
    )
}
