import Head from 'next/head'
import { Inter } from 'next/font/google'
import indexSass from '../styles/indexModule/index.module.scss'
import Navbar from '@/components/Navbar'
import PrimarySelectingSide from '../components/PrimarySelectingSide'
import GroupsThemes from '@/components/GroupsThemes'
import Information from '@/components/Information'
import GroupsAttendances from '@/components/GroupsAttendances'

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
      <Navbar />
      <PrimarySelectingSide />
      <div className="d-none">
        <GroupsThemes />
      </div>
      <div className="d-block">
        <GroupsAttendances />
      </div>
      <Information />
      <script src="../styles/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
    </>
  )
}
