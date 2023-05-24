import React from 'react'
import styles from '../styles/information/information.module.scss'

const Information = () => {
  return (
    <div className={`shadow  ${styles.information}`}>
      <p className="">Total informations</p>
      <div>
        <span className='fw-bold'>Amount subjects</span>
        <span>2</span>
      </div>
      <div>
        <span className='fw-bold'>Amount Groups</span>
        <span>3</span>
      </div>
      <div>
        <span className='fw-bold'>Dates of subjects</span>
        <span>3</span>
      </div>
    </div>
  )
}

export default Information
