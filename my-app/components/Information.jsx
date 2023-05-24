import React from 'react'
import styles from '../styles/information/information.module.scss'

const Information = () => {
  return (
    <div className={`shadow  p-4 ${styles.information}`}>
      <p className="text-center ">Total informations :</p>

      <div className=" d-flex justify-content-between mb-1">
        <span className="fw-bold">Amount Subjects :</span>
        <span className="">2</span>
      </div>
      <div className=" d-flex justify-content-between  mb-1">
        <span className="fw-bold">Amount Groups :</span>
        <span className="ms-4">3</span>
      </div>
      <div className=" d-flex justify-content-between  mb-1">
        <span className="fw-bold">Dates of subjects :</span>
        <span className="ms-4">3</span>
      </div>
    </div>
  )
}

export default Information
