import React from 'react'
import { useParams } from 'react-router-dom'

const Posts = () => {
    let {category} = useParams();
    
  return (
    <div>Posts - {category}</div>
  )
}

export default Posts