import React from 'react'

export default function Card({ data }) {
  console.log("card", data)


  return (
    <div>
      {

        (data.length > 0) ? data.map((val) => {
          return (<div class="card" style={{ width: "18rem" }}>
            <img src={val.avatar} class="card-img-top" alt="image not found " />
            <div class="card-body">
              <h5 class="card-title">{val.first_name}{val.last_name}</h5>
              <p class="card-text">{val.email}</p>
            </div>
          </div>
          )
        }) : <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      }
    </div>
  )
}
