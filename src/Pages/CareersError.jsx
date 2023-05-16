import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

export const CareersError = () => {
  const error = useRouteError()
  return (
    <div>
      <div>{error.message}</div>
      <Link to ='/'>Get Back to the Homepage</Link>
    </div>
  )
}
