import React, { useState } from "react";  


function Body(props){
    console.log(props.data)

    return(
        <>
        <div className="body">
        <div class="flex ...">
  <div class="flex-none ...">
    01
  </div>
  <div class="flex-auto w-64 ...">
    02
  </div>
  <div class="flex-auto w-32 ...">
    03
  </div>
</div>

        </div>
        
        </>
    )
}

export default Body;