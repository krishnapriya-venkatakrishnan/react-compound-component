import React from "react";
import { MenuContext } from "./Menu";
import classNames from "classnames";

export default function MenuDropdown({ children, display }){
    const {open} = React.useContext(MenuContext)
    console.log(display)

    const dropdownClassNames = classNames("dropdown-container", display)
    return (
        open && <div className={dropdownClassNames}>
            {children}
        </div>
    )
}