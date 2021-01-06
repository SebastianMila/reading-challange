import Head from 'next/head'
import {Summary} from "../components/summary/Summary";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Reading Challenge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{padding: '16px'}}>
        <Summary/>
      </main>

      <footer>

      </footer>
    </div>
  )
}
