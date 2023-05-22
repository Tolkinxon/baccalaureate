import React from 'react'
import styles from '../styles/groups/groupsAttendances.module.scss'
import { useEffect, useState } from 'react'

const GroupsAttendances = () => {

  const [data, setData] = useState([])
  const [dataFinal, setDataFinal] = useState([])

  const [groupValue, setGroupValue] = useState('155-19')
  const [dateValue, setDateValue] = useState('2021-08-03')
  const [btn, setBtn] = useState(false)

  useEffect(() => {
    ////////// DATA FETCHING  //////////////
        const data = fetch(' http://localhost:3001/GroupsThemes')
          .then((res) => res.json())
          .then((data) => setData(data))
      }, [])

////////////////  AUTOMATICALLY BTN SUBMITTING  //////////
  setTimeout(() => {
    setBtn(!btn)
  }, 100)
////////////////  AUTOMATICALLY BTN SUBMITTING  //////////


  return (
    <>
      <div className={`shadow p-4  ${styles.groups}`}>
        <div className="row align-items-center justify-content-between my-4">
          <div className="col-6 align-items-center d-flex">
            <span className="fw-bolder  me-3">Groups</span>
            <select class="form-select" aria-label="Default select example">
              <option selected>Select the group</option>
              <option value="1">154-19</option>
              <option value="2">155-19</option>
              <option value="3">153-19</option>
            </select>
          </div>

          <div className="col-3">
            <select class="form-select" aria-label="Default select example">
              <option>{date}</option>
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
    </>
  )
}

export default GroupsAttendances
