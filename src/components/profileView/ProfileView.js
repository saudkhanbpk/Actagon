import React from 'react'
import { useParams } from 'react-router-dom'
function ProfileView() {
  const { id } = useParams()
  console.log(id)
  return (
    <div>ProfileView</div>
  )
}

export default ProfileView