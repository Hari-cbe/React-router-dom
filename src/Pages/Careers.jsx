import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

export const Careers = () => {
  const data = useLoaderData()

  return (
    <div>
      {data.map((item)=>(
      <div>
        <Link to={item.id.toString()} key={item.id}>
         <p>Role : {item.title}</p>
          <p>Based Location : {item.location}</p>
        </Link>
      </div>
     ))}
    </div>
  )
}

export const loaderConst = async () => {
 const res = await fetch('http://localhost:4000/careers')

 if (!res.ok){
  throw Error("Career could not be founded")
 }
 
 return res.json()
}
