import React, { useContext } from 'react'
import { LoginContext } from '../../Context/LoginContext/LoginContext'
const Category = () => {
    const username = useContext(LoginContext);
 
  return (
    <div>
      <h2>{username}</h2>
    </div>
  )
}

export default Category
