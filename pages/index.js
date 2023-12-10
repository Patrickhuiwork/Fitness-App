import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <header className="header">
          <nav className="navbar">
            <div className="logo">

            </div>
            <div className="divNavButton">
              <button className="navHome">HOME</button>
              <button className="navBut">ABOUT US</button>
            </div>
          </nav>
        </header>
        <section className="mainCont">
          <div className="welcomeHome">
            <h1 className="welcome">
              WELCOME TO
            </h1>
            <h1 className="thrive">
              THRIVE
            </h1>
            <Link href="/dashboard">
              <button className="start">
                START NOW
              </button>
            </Link>
          </div>
        </section>
        <section className="dash">
          <h1 className="dashtext">DASHBOARD</h1>
          <section className="stats">

            <div className="box">
              <div className="log">
                <h2 className="logName">Excersise Log</h2>
                <button className="logbut">VIEW LOG</button>
              </div>
              <div className="imagelif">

              </div>
            </div>

            <div className="box">
              <div>

                <h2 className="logName">Calender</h2>


              </div>
            </div>

            <div className="box">
              <div className="log">

                <h2 className="logName">WEIGHT Log</h2>
                <button className="logbut">VIEW LOG</button>
              </div>
              <div className="imagelif">

              </div>
            </div>

            <div className="box">

              <h2 className="logName">meal tracker</h2>
              <button className="logbutm">VIEW LOG</button>

            </div>
          </section>
        </section>
      </main>
    </>
  )
}
