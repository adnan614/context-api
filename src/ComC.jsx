import axios from "axios";
import React, { useEffect } from "react";
import { useStatus } from "./context/ContextStatus";

const ComC = () => {
  const {name,setName} = useStatus();
   
  useEffect(()=>{
       const getPosts = async() =>{
          const res = await axios.get(
            `https://jsonplaceholder.typicode.com/posts`
          );
          
          setName(res?.data)
       }
       getPosts();
  },[])

 
  return (
    <>
      <h1>My name is </h1>
    </>
  );
};

export default ComC;
