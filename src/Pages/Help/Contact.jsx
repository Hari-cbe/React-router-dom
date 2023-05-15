import React from 'react'

export const Contact = () => {
  return (
    <div className='contact'>
        <form className='contact-form' >
          <label>First Name</label>
          <input placeholder='First Name'/>
          <label>Last Name</label>
          <input placeholder='Last Name'/>
          <button> Submit </button>
        </form>
    </div>
  )
}
