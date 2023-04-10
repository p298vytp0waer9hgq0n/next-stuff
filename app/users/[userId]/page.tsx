export const metadata = {
    title: 'User Profile'
}

type Params = {
    params: {
        userId: string
    }
}

export default function UserPage ({ params: { userId }}: Params) {
    return (
        <h1></h1>
    )
}