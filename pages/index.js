import Link from "next/link";
import Script from "next/script";

import Layout from "./components/layout";

export default function Home() {
  return (
    <Layout home>
      <Script src="https://unpkg.com/css-doodle@0.29.0/css-doodle.min.js"></Script>
      <Link href="/cssDoodle">Simple doodle</Link>
      <br />
      <Link href="/doodleGrid">Doodle Grid</Link>
    </Layout>
  );
}
