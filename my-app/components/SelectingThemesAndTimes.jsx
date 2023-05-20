import React from 'react'

const SelectingThemesAndTimes = () => {
  return (
    <div style={{border: '2px solid red'}}>
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
          <select class="form-select" aria-label="Default select example">
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default SelectingThemesAndTimes
