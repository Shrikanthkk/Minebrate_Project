import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Cities = (props) => {
    let navigate=useNavigate()
    let [cities,setCities]=useState([])
    let[selectedCity,setSelectedCity]=useState("select a city")
    useEffect(()=>{
        props.id.map((x)=>{
            if(x.stateName == props.state)
            {
                localStorage.setItem("id",x.stateId)
            }
        })
        const fetchCity = async () => {
          try {
            const response = await fetch(`/api/v1/states/cities/${localStorage.getItem("id")}`);
            let data= await response.json()
            console.log(data)
            setCities(data)   
  
          } catch (error) {
            console.error('Error:', error);
          }
        };
        fetchCity();
  
    },[props.state])
    let handleSubmit=()=>{
        localStorage.setItem("state",props.state)
        localStorage.setItem("city",selectedCity)
        navigate("/view")
    }
  return (
    <div>
    <select name="" id="" value={cities} onChange={(e)=>{setSelectedCity(e.target.value)}}>
        <option>{selectedCity}</option>
            {
                cities.map((x,i)=>{
                    return(
                        <option key={i} value={x.cityName}>{x.cityName}</option>
                    )
                })
            }
        </select>
        <button onClick={handleSubmit}>SUBMIT</button>
    </div>
  )
}

export default Cities