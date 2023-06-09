import React from 'react'
import styles from '../styles/groups/groupsAttendances.module.scss'
import { useEffect, useState } from 'react'
import takingData from '../services/'

const GroupsAttendances = ({ focus }) => {
  const [data, setData] = useState([])
  const [dataFinal, setDataFinal] = useState([])

  const [groupValue, setGroupValue] = useState('153-19')
  const [dateValue, setDateValue] = useState('2023-04-02')
  const [btn, setBtn] = useState(false)

  const DaTa = async () => {
    const result = (await takingData()) || []
    return result
  }

  useEffect(() => {
    ////////// DATA FETCHING  //////////////
    DaTa().then((res) => {
      setData(res)
    })
  }, [])

  ///////////////  FILTER BY SUBMITTING BTN ///////////////
  useEffect(() => {
    const data2 = data.map((res) => {
      if (
        res.node.date.includes(dateValue) &&
        res.node.group.includes(groupValue)
      ) {
        return res
      }
    })
    const data3 = data2.filter((data) => data !== undefined)
    setDataFinal(data3)
  }, [btn])

  useEffect(() => {
    const data2 = data.map((res) => {
      if (
        res.node.date.includes(dateValue) &&
        res.node.group.includes(groupValue)
      ) {
        return res
      }
    })
    const data3 = data2.filter((data) => data !== undefined)
    setDataFinal(data3)
  }, [focus])
  ///////////////  FILTER BY SUBMITTING BTN ///////////////

  ///////////// TAKING VALUES ////////////////
  const Value = (e) => {
    if (e.target.name === 'date') {
      setDateValue(e.target.value)
    }
    if (e.target.name === 'group') {
      setGroupValue(e.target.value)
    }
    setBtn(!btn)
  }
  ///////////// TAKING VALUES ////////////////

  return (
    <>
      <div className={`shadow p-4  ${styles.groups}`} onClick={(e) => Value(e)}>
        <div className="row align-items-center my-2 mb-4">

        <div className="col-4 d-flex flex-column">
          <span className="fw-bolder  mb-2">Mavzular</span>
          <select
            class="form-select "
            name="theme"
            aria-label="Default select example"
          >
            <option value="Boshqarish">
              Boshqarish jarayonlarida axborot texnologiyalari
            </option>
            <option value="Intelektual">
              Intelektual boshqarish nazariyasi
            </option>
          </select>
        </div>  

          <div className="col-6 ">
            <span className="fw-bolder ">Guruhlar</span>
            <select
              class="form-select  mt-2"
              aria-label="Default select example"
              name="group"
            >
              <option value="153-19">153-19</option>
              <option value="154-19">154-19</option>
              <option value="155-19">155-19</option>
            </select>
          </div>

          <div className="col">
            <span className="fw-bolder ">Sana</span>
            <select
              class="form-select  mt-2"
              aria-label="Default select example"
              name="date"
            >
              <option value="2023-04-02">2023-04-02</option>
              <option value="2023-04-03">2023-04-03</option>
              <option value="2023-04-04">2023-04-04</option>
            </select>
          </div>
        </div>

        <table class="table  table-borderless mt-5">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Ismlar</th>
              <th scope="col " className="text-center">
                Davomat
              </th>
            </tr>
          </thead>
          <tbody>
            {dataFinal.map((data, idx) => (
              <>
                <tr key={idx}>
                  <th scope="row">{idx + 1}</th>
                  <td >{data.node.name}</td>
                  <td
                    className={`text-center fw-bold ${
                      data.node.attendance >= 75
                        ? 'text-success'
                        : data.node.attendance < 75 &&
                          data.node.attendance >= 50
                        ? 'text-warning'
                        : 'text-danger'
                    }`}
                  >
                    {data.node.attendance}%
                  </td>
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
