import React, { useEffect, useState } from 'react'
import Card from './Card';

export default function Nav({setData}) {
    // let [data,setdata]=useState([])
    function apicall(){
        fetch('https://reqres.in/api/users?page=1')
        .then(response => {return response.json(); })
        .then(data => { console.log(data.data)
            setData(data.data)
        })
      

    }

   console.log("hi hello") 
const  handleclick=(e)=>{
        e.preventDefault()
       setTimeout(()=>{ apicall()},3000)
       console.log('dataapicall',setData)
 

    }
  


    return (
        <>
            <nav>
                <span>aDE</span>
                <button onClick={handleclick}>GetUSER</button>
            </nav>
        </>

    )
}
