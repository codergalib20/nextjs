import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export async function getStaticProps() {
  // Fetch data from external API
  const res = await fetch(`https://redonoin.herokuapp.com/product/getProduct`);
  const data = await res.json();
  console.log(data);
  // Pass data to the page via props
  return { props: { data } };
}

export default function Home({ data }) {
  return (
    <div className={styles.container}>
      <h1>Yeasen</h1>
    </div>
  );
}
