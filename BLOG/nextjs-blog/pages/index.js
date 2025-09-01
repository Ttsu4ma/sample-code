import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
 
export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Hi, I’m Taku Tsushima! Welcome to my blog. I’m a gamer at heart, and this is where I share my thoughts, experiences, and little adventures in the world of games.

Whether it’s exploring new titles, revisiting classics, or just talking about what I’m currently playing, I love connecting with people who share the same passion. Games aren’t just a hobby for me—they’re a way to relax, have fun, and sometimes even learn new things.

Thanks for stopping by, and I hope you’ll enjoy reading along. Let’s level up together!]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}