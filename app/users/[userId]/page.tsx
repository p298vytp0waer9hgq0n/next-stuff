import { Suspense } from 'react';
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
    const userPostsData: Promise<Post[]> = getUserPosts(userId);

    // const [user, userPosts] = await Promise.all([userData, userPostsData]);
    const user = await userData;
    return (
        <>
            <h1>{user.name}</h1>
            <Suspense fallback={<h2>Loading...</h2>}>
                { /* <UserPosts promise={userPostsData} /> */ }
            </Suspense>
        </>
    )
}
