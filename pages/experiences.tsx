import Head from 'next/head'
import Image from 'next/image'
import type { NextPage } from "next/types"
import { Col } from 'react-grid-system'
import AppRow from '../components/AppRow'
import { CategoryCard } from '../components/category'
import Header from '../components/Header'
import Layout from "../components/layout"
import Row from '../components/row'
import Search from '../components/Search'
import styles from '../styles/experiences.module.css'

const apps = [
  {
    id: 1,
    title: "Defi Swap",
    description: "Swap your digital assets",
    user_amount: 200,
    image: "/icons/app-icon-1.png",
  },
  {
    id: 2,
    title: "Docu sign",
    description: "sign smart contracts seamlessly",
    user_amount: 2000000000,
    image: "/icons/app-icon-2.png",
  },
]

const Experience: NextPage = () => {
  return (
    <Layout>
      <Header goBack="/" />
      <div className={styles.container}>
        <Head>
          <title>Extension Wallet Feedback</title>
          <meta name="description" content="Extension Wallet Feedback" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <div className={styles.searchContainer}>
            <Search style={{ width: '80%' }} />
            <div className='filter-icon'>
              <Image src={"/icons/filter.svg"} alt='filter icon' width={24} height={24} />
            </div>
            <style jsx>{`
            .filter-icon {
              display: flex;
              justify-content: center;
              width: 20%;
            }
            `}</style>
          </div>
          <div className={styles.sectionTitleWapper}>
            <span className={styles.sectionTitle}>Recent Experiences</span>
          </div>
          {
            apps.map((app, index) => {
              return <AppRow data={app} key={index} />
            })
          }
          <div className={styles.sectionTitleWapper}>
            <span className={styles.sectionTitle}>Popular Categories</span>
            <div className={styles.viewDetailWrapper}>
              <span className={styles.seeAllText}>See All</span>
              <Image src={"/icons/arrow-right-primary.svg"} alt='arrow-right-image' width={24} height={24} />
            </div>
          </div>
          <Row style={{ width: 'calc(100% + 16px)', justifyContent: 'space-between' }}>
            <CategoryCard icon={"/icons/chart.svg"} bgColor={"#EAEFFF"} name="Exchanges" />
            <CategoryCard icon={"/icons/game.svg"} bgColor={"#F5F5F5"} name="Games" />
          </Row>
          <Row style={{ width: 'calc(100% + 16px)', justifyContent: 'space-between' }}>
            <CategoryCard icon={"/icons/cart.svg"} bgColor={"#E2F9F3"} name="Marketplaces" />
            <CategoryCard icon={"/icons/box.svg"} bgColor={"#FFF3EC"} name="Defi" />
          </Row>
          <Row style={{ width: 'calc(100% + 16px)', justifyContent: 'space-between' }}>
            <CategoryCard icon={"/icons/crown.svg"} bgColor={"#EBF5FF"} name="Collectibles" />
            <CategoryCard icon={"/icons/utilities.svg"} bgColor={"#F0EBFF"} name="Utilities" />
          </Row>

          <div className={styles.sectionTitleWapper}>
            <span className={styles.sectionTitle}>Popular Experiences</span>
            <div className={styles.viewDetailWrapper}>
              <span className={styles.seeAllText}>See All</span>
              <Image src={"/icons/arrow-right-primary.svg"} alt='arrow-right-image' width={24} height={24} />
            </div>
          </div>
          {
            apps.map((app, index) => {
              return <AppRow data={app} key={index} />
            })
          }
        </main>
      </div>
    </Layout>
  )
}

export default Experience
