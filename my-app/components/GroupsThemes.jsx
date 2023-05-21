import React from 'react'
import styles from '../styles/groups/groupsThemes.module.scss'
import { useEffect, useState } from 'react'

const GroupsThemes = () => {
  const [date, setDate] = useState('')

  useEffect(() => {
    const year = `${new Date().getFullYear()}`
    const month = new Date().getMonth() < 10 ? `0${ new Date().getMonth() + 1 }` : `${ new Date().getMonth() + 1 }`
    const date = new Date().getDate() < 10 ? `0${ new Date().getDate() }` : `${ new Date().getDate() }`

    setDate(`${year}-${month}-${date}`)
  }, [])

  console.log(date);



  return (
    <div className={`shadow ${styles.groups}`}>
      <div className="row">
        <div className="col-2">
          <p className="fw-bolder">Mavzular</p>
        </div>
        <div className="col">
          <select class="form-select" aria-label="Default select example">
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div className="col-2">
          <input type="date" value={date} />
        </div>
        <div className="col-2 d-none">
          <select class="form-select" aria-label="Default select example">
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div>

      <table class="table  table-borderless">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default GroupsThemes
