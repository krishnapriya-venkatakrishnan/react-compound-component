import React from "react";

export default function useToggle(){
    const [open, setOpen] = React.useState(false)

    function toggleOpen(){
        console.log("toggled")
        setOpen(prev => !prev)
    }

    return [open, toggleOpen]
}