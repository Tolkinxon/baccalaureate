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

  ///////////////  FILTER BY SUBMITTING BTN ///////////////
  useEffect(() => {
    const data2 = data.map((res) => {
      if (res.date.includes(dateValue) && res.group.includes(groupValue)) {
        return res
      }
    })
    const data3 = data2.filter((data) => data !== undefined)
    setDataFinal(data3)
  }, [btn])
  ///////////////  FILTER BY SUBMITTING BTN ///////////////

  ///////////// TAKING VALUES ////////////////
  const Value = (e) => {
    if (e.target.name === 'date') {
      setDateValue(e.target.value)
    }
    if (e.target.name === 'group') {
      setGroupValue(e.target.value)
    }
  }
  ///////////// TAKING VALUES ////////////////

  return (
    <>
      <div className={`shadow p-4  ${styles.groups}`} onClick={(e) => Value(e)}>
        <div className="row align-items-center justify-content-between my-4">
          <div className="col-6 align-items-center d-flex">
            <span className="fw-bolder  me-3">Groups</span>
            <select
              class="form-select"
              aria-label="Default select example"
              name="group"
            >
              <option value="155-19">155-19</option>
              <option value="153-19">153-19</option>
              <option value="154-19">154-19</option>
            </select>
          </div>

          <div className="col-3">
            <select
              class="form-select"
              aria-label="Default select example"
              name="date"
            >
              <option value="2021-08-03">2021-08-03</option>
              <option value="2022-08-03">2022-08-03</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>

        <table class="table  table-borderless">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Names</th>
              <th scope="col">Attendance</th>
            </tr>
          </thead>
          <tbody>
            {dataFinal.map((data, idx) => (
              <>
                <tr key={idx}>
                  <th scope="row">{idx + 1}</th>
                  <td>{data.name}</td>
                  <td>{data.attendace}</td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default GroupsAttendances
