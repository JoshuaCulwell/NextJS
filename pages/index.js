import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Counter from '../components/Counter';
import Counter2 from '../components/Counter2';
import GithubParagraph from '../components/GithubParagraph';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Joshua Culwell welcomes <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <Counter />
        <Counter2 />
        <GithubParagraph />
      </main>
    </div>
  );
}
