import React from 'react'

const View = () => {
    let state=localStorage.getItem("state")
    let city=localStorage.getItem("city")
  return (
    <div>
        <h1>YOU HAVE SELECTED {city}, {state}</h1>
    </div>
  )
}

export default View