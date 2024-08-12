import React from "react";
import { FaAngleRight  } from "react-icons/fa6";

export default function MenuItem({ children }){
    return (
        <button className="item">
            {children}
            {/* <FaAngleRight  /> */}
        </button>
    )
}