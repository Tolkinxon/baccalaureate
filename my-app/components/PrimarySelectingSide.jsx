import React from 'react'
import classes from '../styles/primarySelectingSide/PrimarySelectingSide.module.scss'
import { useState } from 'react'

const PrimarySelectingSide = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <>
      <div
        className={` ${classes.Container}`}
        style={{ height: toggle ? '110px' : '45px' }}
      >
        <button
          onClick={() => setToggle(!toggle)}
          className={`${classes.button}`}
          style={{color: toggle ? 'burlywood' : 'white'}}
        >
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-calendar-day"
              viewBox="0 0 16 16"
            >
              <path d="M4.684 11.523v-2.3h2.261v-.61H4.684V6.801h2.464v-.61H4v5.332h.684zm3.296 0h.676V8.98c0-.554.227-1.007.953-1.007.125 0 .258.004.329.015v-.613a1.806 1.806 0 0 0-.254-.02c-.582 0-.891.32-1.012.567h-.02v-.504H7.98v4.105zm2.805-5.093c0 .238.192.425.43.425a.428.428 0 1 0 0-.855.426.426 0 0 0-.43.43zm.094 5.093h.672V7.418h-.672v4.105z" />
              <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
            </svg>

            <span>Dars Mavzulari & Davomat</span>
          </div>

          <svg
            style={{
              transition: 'all 0.5s ease',
              transformOrigin: 'center center',
              transform: toggle ? 'rotate(-90deg)' : 'rotate(0deg)',
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-chevron-left"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
            />
          </svg>
        </button>

        <ul
        // style={{
        //   height: toggle ? 'auto' : '34px',
        // }}
        >
          <li>Dars mavzulari</li>
          <li>Davomat</li>
        </ul>
      </div>
    </>
  )
}

export default PrimarySelectingSide
