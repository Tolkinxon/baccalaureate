import React from 'react'
import styles from '../styles/navbar/navbar.module.scss'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="35"
        height="35"
        fill="currentColor"
        className={`${styles.svg}`}
        viewBox="0 0 16 16"
      >
        <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5Z" />
        <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Z" />
      </svg>

      <div>I.A.Karimov nomidagi Toshkent Davlat Texnika Universtiteti</div>

      <div className=" me-4">
        <Image
          src="/4x4picture.jpg"
          width={40}
          height={40}
          className={`${styles.img}`}
        />
        <div>O'qituvchi: Mamirov Sardor</div>
      </div>
    </div>
  )
}

export default Navbar
