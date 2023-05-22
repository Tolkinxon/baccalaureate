import React from 'react'
import styles from '../styles/groups/groupsThemes.module.scss'
import { useEffect, useState } from 'react'

const GroupsThemes = () => {
  const [date, setDate] = useState('')
  const [data, setData] = useState([])
  const [dataFinal, setDataFinal] = useState([])

  const [themeValue, setThemeValue] = useState('')
  const [groupValue, setGroupValue] = useState('')
  const [dateValue, setDateValue] = useState('')
  const [btn, setBtn] = useState(false)

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

    //////// DATA FETCHING  //////////////
    const data = fetch(' http://localhost:3001/GroupsThemes')
      .then((res) => res.json())
      .then((data) => setData(data))
  }, [])

  console.log(themeValue, dateValue, groupValue)

  useEffect(() => {
    const data2 = data.map((res) => {
      if (
        res.theme.includes(themeValue) &&
        res.date.includes(dateValue) &&
        res.group.includes(groupValue)
      ) {
        return res
      }
    })
    setDataFinal(data2)
  }, [btn])

  const Value = (e) => {
    if (e.target.name === 'theme') {
      setThemeValue(e.target.value)
    }
    if (e.target.name === 'date') {
      setDateValue(e.target.value)
    }
    if (e.target.name === 'group') {
      setGroupValue(e.target.value)
    }
  }

  console.log(dataFinal)

  return (
    <div className={`shadow p-4 ${styles.groups}`} onClick={(e) => Value(e)}>
      <div className="row align-items-center justify-content-between my-2 mb-4">
        <div className="col-4 d-flex flex-column">
          <span className="fw-bolder  mb-1">Themes</span>
          <select
            class="form-select "
            name="theme"
            aria-label="Default select example"
          >
            <option value="hayot">Hayot faoliyati</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>

        <div className="col-3 d-flex flex-column">
          <span className="fw-bolder  mb-1">Date</span>
          <select
            class="form-select"
            name="date"
            aria-label="Default select example"
          >
            <option>{date}</option>
            <option value="2022-08-03">2022-08-03</option>
            <option value="2021-08-03">2021-08-03</option>
            <option value="3">Three</option>
          </select>
        </div>

        <div className="col-2   d-flex flex-column">
          <span className="fw-bolder mb-1">Group</span>
          <select
            class="form-select"
            name="group"
            aria-label="Default select example"
          >
            <option value="154-19">154-19</option>
            <option value="153-19">153-19</option>
            <option value="155-19">155-19</option>
          </select>
        </div>
        <div className="col-2  align-self-end">
          <button
            className="btn btn-outline-secondary  rounded-pill px-4"
            onClick={() => setBtn(!btn)}
          >
            submit
          </button>
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
