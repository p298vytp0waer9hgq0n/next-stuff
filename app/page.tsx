import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Blah!</h1>
      <Link href="/about">About Page</Link>
      <Link href="/users">Users</Link>
    </main>
  )
}
