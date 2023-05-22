import React from 'react'
import styles from '../styles/groups/groupsThemes.module.scss'
import { useEffect, useState } from 'react'

const GroupsThemes = () => {
  const [data, setData] = useState([])
  const [dataFinal, setDataFinal] = useState([])

  const [themeValue, setThemeValue] = useState('hayot')
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
      if (
        res.theme.includes(themeValue) &&
        res.date.includes(dateValue) &&
        res.group.includes(groupValue)
      ) {
        return res
      }
    })
    const data3 = data2.filter((data) => data !== undefined)
    setDataFinal(data3)
  }, [btn])
///////////////  FILTER BY SUBMITTING BTN ///////////////



///////////// TAKING VALUES ////////////////
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
///////////// TAKING VALUES ////////////////


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
            <option value="2021-08-03">2021-08-03</option>
            <option value="2022-08-03">2022-08-03</option>
            <option value="3">Three</option>
          </select>
        </div>

        <div className="col-2   d-flex flex-column">
          <span className="fw-bolder mb-1">Groups</span>
          <select
            class="form-select"
            name="group"
            aria-label="Default select example"
          >
            <option value="155-19">155-19</option>
            <option value="153-19">153-19</option>
            <option value="154-19">154-19</option>
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
            <th scope="col">Names</th>
            <th scope="col">Band score</th>
          </tr>
        </thead>
        <tbody>
          {dataFinal.map((data, idx) => (
            <>
              <tr key={idx}>
                <th scope="row">{idx + 1}</th>
                <td>{data.name}</td>
                <td>{data.score}</td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default GroupsThemes
