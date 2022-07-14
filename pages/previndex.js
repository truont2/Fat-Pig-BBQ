import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import axios from 'axios';
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Jumbotron } from "../components/Jumbotron";
import { MenuJumbo } from "../components/MenuJumbo";
import { OrderSection } from "../components/OrderSection";
import Location from "../components/Location";
import { Yelp } from "../components/Yelp";
import AlertItem from "../components/AlertItem";
import { useRouter } from 'next/router';
import {HomepageAlert} from '../components/HomepageAlert';

export default function Home({ homepage }) {
  const { data: session } = useSession()
  const router = useRouter()
  return (
    <main>
      <Head >
        <title>Fat Pig BBQ</title>
        <meta name="Fat Pig BBQ restaurant website" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* mongo section */}
      <div className={styles.container}>
      {/* <AlertItem homepage={homepage[0]}/>
      <Jumbotron homepage={homepage[0]}/>
      {session ? <p>{session.user.name}</p>: ""}
      <div className={styles.content}>
        <MenuJumbo homepage={homepage[0]}/>
        <OrderSection homepage={homepage[0]}/>
        <Location homepage={homepage[0]}/>
        <Yelp homepage={homepage[0]}/>
      </div> */}
      {/* firebase section */}
      <AlertItem homepage={homepage}/>
      <Jumbotron homepage={homepage}/>
      <div className={styles.content}>
        <MenuJumbo homepage={homepage}/>
        <HomepageAlert homepage={homepage}/>
        <OrderSection homepage={homepage}/>
        <Location homepage={homepage}/>
        <Yelp homepage={homepage}/>
      </div>
      </div>
      
    </main>
  );
}

export const getServerSideProps = async () => {
  const res = await axios.get("http://localhost:3000/api/homepage");
  return {
    props: {
      homepage: res.data, 
    }
  }
}
