import React from 'react'
import { useParams } from 'react-router-dom'
function ProfileView() {
  const { id } = useParams()
  console.log(id)
  return (
    <>
      <h1>Profile View</h1>
      <h2>{id}</h2>
    </>
  )
}

export default ProfileView