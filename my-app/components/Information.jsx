import React from 'react'
import styles from '../styles/information/information.module.scss'

const Information = () => {
  return (
    <div className={`shadow rounded-3  p-4 ${styles.information}`}>
      <p className="text-center fw-bold h5 mb-4  ">Umumiy ma'lumotlar :</p>

      <div className=" d-flex justify-content-between border-bottom border-success  mb-3">
        <span className="fw-bold">Fanlar soni :</span>
        <span className="">2</span>
      </div>
      <div className=" d-flex justify-content-between  border-bottom border-success   mb-3">
        <span className="fw-bold">Guruhlar soni :</span>
        <span className="ms-4">3</span>
      </div>
      <div className=" d-flex justify-content-between  border-bottom border-success   mb-1">
        <span className="fw-bold">Kunlar soni :</span>
        <span className="ms-4">3</span>
      </div>
    </div>
  )
}

export default Information
