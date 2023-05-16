import { useLoaderData, useParams } from "react-router-dom"

export const CareerDetials = () => {
  const {id} = useParams()
  const data = useLoaderData()

  return (
    <div>
      <h1>Career Title : {data.title}</h1>
      <h3>Location : {data.location}</h3>
      <h4>Salary: {data.salary}</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta totam architecto deleniti voluptate sapiente? Corporis deserunt officia qui quidem, beatae possimus dignissimos tempore veniam, modi id sed accusantium recusandae in perspiciatis aliquam quibusdam voluptas porro magnam, iure repellat non maxime ullam. Explicabo recusandae blanditiis aperiam, pariatur veritatis iusto error in tempore nulla maiores facere adipisci laboriosam dicta, facilis atque nemo ipsam laborum voluptate autem perferendis. Facilis, dolorem iusto, voluptatem earum pariatur facere porro similique rem maxime beatae  </p>
    </div>
  )
}


export const loaderData = async ({params}) => {
  const { id } = params
  const res = await fetch("http://localhost:4000/careers/" + id)

  if (!res.ok){
    throw Error("Career could not be founded")
   }
   
  return res.json()
} 