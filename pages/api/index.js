import React from "react";
import dynamic from "next/dynamic";
import axios from 'axios';
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Jumbotron } from "../components/Jumbotron";
import { MenuJumbo } from "../components/MenuJumbo";
import { OrderSection } from "../components/OrderSection";
import Location from "../components/Location";
import { Yelp } from "../components/Yelp";
import {Alert} from '../../components/Alert';

export default function Home({ homepage }) {
  return (
    <main>
      <Head>
        <title>Fat Pig BBQ</title>
        <meta name="Fat Pig BBQ restaurant website" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Alert />
      <Jumbotron homepage={homepage[0]}/>
      <div className={styles.content}>
        <MenuJumbo />
        <OrderSection />
        <Location />
        <Yelp />
      </div>
    </main>
  );
}

export const getServerSideProps = async () => {
  const res = await axios.get("http://localhost:3000/api/homepage");
  return {
    props: {
      homepage: res.data
    }
  }
}
