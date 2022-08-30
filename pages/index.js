import Link from "next/link";
import Head from "next/head";

import utilStyles from "/styles/utils.module.css";
import Layout, { siteTitle } from "./components/layout";
import Date from "./components/date";
import { getSortedPostsData } from "../lib/posts";

// getStaticProps only runs on the server-side.
// It will never run on the client-side.
// It won’t even be included in the JS bundle for the browser.
// That means you can write code such as direct database queries without them being sent to browsers.
// In development (npm run dev or yarn dev), getStaticProps runs on every request.
// In production, getStaticProps runs at build time. However, this behavior can be enhanced using the fallback key returned by getStaticPaths
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

// To use Server-side Rendering, you need to export getServerSideProps instead of getStaticProps from your page.

// Because getServerSideProps is called at request time, its parameter (context) contains
// request specific parameters.

// You should use getServerSideProps only if you need to pre-render a page whose data must be
// fetched at request time. Time to first byte (TTFB) will be slower than getStaticProps because
// the server must compute the result on every request, and the result cannot be cached by a CDN
// without extra configuration.

// The team behind Next.js has created a React hook for data fetching called SWR.
// We highly recommend it if you’re fetching data on the client side.
//It handles caching, revalidation, focus tracking, refetching on interval, and more.

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hey, I&apos;m Devansh Walia</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
