import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div>
        <div className="p-36 w-full object-fill bg-[url('https://cdn.discordapp.com/attachments/767561915874148382/992618551993180241/unknown.png')] bg-opacity-50 bg-no-repeat bg-cover">
          <div className="flex flex-col justify-center items-center mt-64">
            <h1 className="text-6xl w-2/5 p-5 bg-blue-1000/[.4] text-white">Your one-stop shop for concert tickets</h1>
            <button className="text-4xl text-white mt-10 rounded-3xl p-5 bg-gradient-to-r from-blue-500/[.7] to-pink-400/[.7]">Get Started</button>
          </div>
        </div>
    </div>
  )
}
