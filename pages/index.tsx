import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>Extension Wallet Feedback</title>
          <meta name="description" content="Extension Wallet Feedback" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <Link href={"/experiences"}>
            <h1>Go To My page</h1>
          </Link>
        </main>
      </div>
    </Layout>
  )
}

export default Home
