import Head from 'next/head'
import Image from 'next/image'
import type { NextPage } from "next/types"
import { useEffect, useState } from 'react'
import Button from '../components/Button'
import Header from '../components/Header'
import Layout from "../components/layout"
import { numberMinimize } from '../helpers/number'
import styles from '../styles/details.module.css'
import { AppData } from './details.d'


const Experience: NextPage = () => {
  const [data, setData] = useState<AppData | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (!mounted) {
      setMounted(true);
      let id = parseInt(window.location.search.split('=')[1]);
      const body = JSON.stringify({ id: id })
      const config: RequestInit = {
        method: "POST",
        body
      }
      fetch('/api/detail', config).then(res => res.json())
        .then(data => {
          setTimeout(() => {
            setData(data);
          }, 1000);
        })
    }
  }, [mounted])

  return (
    <Layout>
      <Header goBack="/experiences" />
      <div className={styles.container}>
        <Head>
          <title>Extension Wallet Feedback</title>
          <meta name="description" content="Extension Wallet Feedback" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          {
            data ? (
              <div className={styles.wrapper}>
                <div className={styles.header}>
                  <div className={styles.colorheader}></div>
                  <div className={styles.content}>
                    <div className={styles.icon}>
                      <Image src={data.image} width={75} height={75} />
                    </div>
                    <div className={styles.shareGroup}>
                      <Image src={'/icons/share.svg'} width={20} height={20} />
                      <span className={styles.shareText}>Share</span>
                    </div>
                  </div>
                  <div className={styles.details}>
                    <span className={styles.title}>{data.title}</span>
                    <span className={styles.description}>{data.description}</span>
                    <span className={styles.type}>{data.type}</span>
                    <div className={styles.moredetail}>
                      <Button
                        text={"Open"}
                        endIcon={<Image src={"/icons/send.svg"} width={20} height={20} />}
                        style={{marginRight: 10}}
                        onClick={() => alert('')}
                      />
                      <Image src={"/icons/users.svg"} width={16} height={16} />
                      <span>{numberMinimize(data.user_amount)}+  users</span>
                    </div>
                  </div>
                </div>
                <div className={styles.tabViewSection}>
                  
                </div>
              </div>
            ) : (
              <div>
                <Image src={"/icons/loading.gif"} width={50} height={50} />
              </div>
            )
          }
        </main>
      </div>
    </Layout>
  )
}

export default Experience
