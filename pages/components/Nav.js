import Link from 'next/link'

import React from 'react'

const Nav = () => {
  return (
    <nav>
        <ul className="display flex text-3xl justify-between items-center p-10 bg-blue-1000 text-white">
            <li>
                <Link href='/'>Logo</Link>
            </li>
            <div className="display flex items-center">
                <li className="mr-24">
                    <Link href='/about'>About</Link>
                </li>
                <li className="mr-24">
                    <Link href='/events'>Browse</Link>
                </li>
                <button>
                    Sign In
                </button>
            </div>
        </ul>
    </nav>
  )
}

export default Nav