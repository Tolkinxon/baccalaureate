import Head from 'next/head'
import { Inter } from 'next/font/google'
import indexSass from '../styles/index.module.scss'
import Groups from '@/components/Groups'
import Information from '@/components/Information'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={`container-fluid border border-3  ${indexSass.Container}`}
      >
        <div className="row">
          <div className="col-3 bg-dark ">
            <h1 style={{ color: 'white' }}>O'quvchilar</h1>
          </div>

          {/* ALL DATA SHIWING SIDE */}
          <div className="col-5 shadow m-3">
            <Groups />
          </div>
          {/* ALL DATA SHIWING SIDE */}

          <div className="col-3 shadow m-3">
            <Information />
          </div>
        </div>
      </div>

      <script src="../styles/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
    </>
  )
}
