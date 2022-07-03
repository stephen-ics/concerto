import { useEffect } from 'react'
import { useAuthProvider } from './context/AuthContext'
import UserPreview from './UserPreview'
import Link from 'next/link'

const Nav = () => {
  const { user, error, loading, signIn } = useAuthProvider();

  useEffect(() => {
    error && alert("ERROR logging in!")
    console.log(user)
  }, [])

  return (
    <nav>
        <ul className="display flex text-xl justify-between items-center p-10 bg-blue-1000 text-white">
            <li>
                <Link href='/'>
                    <h1 className='text-3xl'>Concerto</h1>
                </Link>
            </li>
            <div className="display flex items-center">
                <li className="mr-24 hover:border-b hover:border-b-white">
                    <Link href='/about'>About</Link>
                </li>
                <li className="mr-24 hover:border-b hover:border-b-white">
                    <Link href='/events'>Events</Link>
                </li>
                <li className="mr-24 hover:border-b hover:border-b-white">
                    <Link href='/compose'>Host</Link>
                </li>
                <li className="mr-24 hover:border-b hover:border-b-white">
                    <Link href='/profile'>Profile</Link>
                </li>
                <li>
                   {user ? (
                    <Link href="/profile">
                        <UserPreview {...user} />
                    </Link>
                    ) : (
                    loading ? "loading..." : (
                        <button className='p-4 bg-zinc-800 text-white font-bold rounded-lg' onClick={signIn}>Sign in</button>
                   ))}
                </li>
            </div>
        </ul>
    </nav>
  )
}


export default Nav