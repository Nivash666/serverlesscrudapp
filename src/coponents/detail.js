import React, { useState } from "react"
import { useLocation } from "react-router-dom"
export default function Detail(){
    const location=useLocation()
    const {state}=location
    return(<>
      <h1>Detail page
        <div className="text-success fw-bold">
            hii {state.username.S} your age is {state.age.N}
            and Your Email is {state.email.S}

        </div>
      </h1>
    </>)
}