import React from 'react'
import Nav from './Nav'

const Layout = ({children}) => {
  return (
    <div className="">
        <Nav />
        <div className="">
            <main className="">
                {children}
            </main>
        </div>
        <div className="bg-blue-1000 p-12 fixed bottom-0 w-full"></div>
    </div>
  )
}

export default Layout