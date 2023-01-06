import React, { useState } from "react";
import ComC from "./ComC";
import { useStatus } from "./context/ContextStatus";

const ComB = () => {
  const { name, setName } = useStatus();


  return (
    <div>
      <ComC />
      <div>
         <ul>
             {
                name?.map((item)=>(
                   <li>{item?.title}</li>
                ))
             }
         </ul>
      </div>
    </div>
  );
};

export default ComB;
