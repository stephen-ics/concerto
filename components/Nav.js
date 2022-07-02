import Link from 'next/link'
import React from 'react'
import { useAuthProvider } from './context/AuthContext'

const Nav = () => {
  const { user, loading, error, signIn } = useAuthProvider();

  if (loading) {
    return <h1>loading...</h1>
  }

  return (
    <nav>
        <ul className="display flex text-3xl justify-between items-center p-10 bg-blue-1000 text-white">
            <li>
                <Link href='/'>Concerto</Link>
            </li>
            <div className="display flex items-center">
                <li className="mr-24">
                    <Link href='/about'>About</Link>
                </li>
                <li className="mr-24">
                    <Link href='/events'>Browse</Link>
                </li>
                <li className="mr-24">
                    <Link href='/compose'>Host!</Link>
                </li>
                <li>
                   {user ? <h1>{JSON.stringify(user, null, 2)}</h1> : <button className='p-4 bg-zinc-800 text-white font-bold rounded-lg' onClick={signIn}>Sign in</button>}
                </li>
            </div>
        </ul>
    </nav>
  )
}


export default Nav