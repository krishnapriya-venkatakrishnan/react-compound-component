import React from "react";
import { FaAngleDown, FaAngleRight } from "react-icons/fa6";
import { MenuContext } from "./Menu";
import Button from "../Button/Button";

export default function MenuButton({ children, arrow }){
    const { toggleOpen } = React.useContext(MenuContext)
    
    return (
        
        <Button>
            {children}
            {
                arrow === "down" ? 
                <FaAngleDown onClick={toggleOpen} /> :
                <FaAngleRight onClick={toggleOpen} />
            }
        </Button>
        
    )
}