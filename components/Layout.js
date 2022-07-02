import React from 'react'
import Nav from './Nav'

const Layout = ({ children }) => {
  return (
    <div className="grid grid-rows-page min-h-screen">
        <Nav />
        
        <main>
            {children}
        </main>
       
        <div className="bg-blue-1000 p-12 bottom-0 w-full"></div>
    </div>
  )
}

export default Layout