import React from 'react'
import { Form, redirect } from 'react-router-dom'

export const Contact = () => {
  return (
    <div className='contact'>
        <Form method='post' action='/help/contact' >
          <label>First Name</label>
          <input placeholder='First Name' name='Fname'/>
          <label>Last Name</label>
          <input placeholder='Last Name'name='Lname'/>
          <button type='submit'> Submit </button>
        </Form>
    </div>
  )
}

export const actionLoader = async ({request})=>{

  const data = await request.formData()

  const submission = {
    FirstName : data.get('Fname'),
    LastName : data.get('Lname')
  } 

  localStorage.setItem("users",JSON.stringify(submission))
  return redirect('/help')
}
