import React from 'react'
import styles from '../styles/groups/groupsAttendances.module.scss'
import { useEffect, useState } from 'react'

const GroupsAttendances = () => {
  const [date, setDate] = useState('')

  useEffect(() => {
    const year = `${new Date().getFullYear()}`
    const month =
      new Date().getMonth() < 10
        ? `0${new Date().getMonth() + 1}`
        : `${new Date().getMonth() + 1}`
    const date =
      new Date().getDate() < 10
        ? `0${new Date().getDate()}`
        : `${new Date().getDate()}`

    setDate(`${year}-${month}-${date}`)
  }, [])

  return (
    <>
      <div className={`shadow p-4  ${styles.groups}`}>
        <div className="row align-items-center justify-content-between">
          <div className="col-6 align-items-center d-flex">
            <span className="fw-bolder  me-4">Groups</span>
            <select class="form-select" aria-label="Default select example">
              <option selected>Select the group</option>
              <option value="1">154-19</option>
              <option value="2">155-19</option>
              <option value="3">153-19</option>
            </select>
          </div>

          <div className="col-3">
            <input type="date" value={date} />
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
    </>
  )
}

export default GroupsAttendances
