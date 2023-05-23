import React from 'react'
import styles from '../styles/information/information.module.scss'

const Information = () => {
  return (
    <div className={`shadow  ${styles.information}`}>
      <p className="display-6">Ma'lumot</p>
      <table class="table table-borderless">
        <tbody>
          <tr className="row">
            <th scope="row" className="col">
              fanlar
            </th>
            <td className="col-8">Mark</td>
          </tr>
          <tr className="row">
            <th scope="row" className="col">
              Mashg'ulot
            </th>
            <td className="col-8">Jacob</td>
          </tr>
          <tr className="row">
            <th scope="row" className="col">
              Dars sanalari
            </th>
            <td className="col-8">Jacob</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Information
