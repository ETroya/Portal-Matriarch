import React from "react"

const Col = ({isOver, childern}){
    const className = isOver ? "highlight-region : "";

    return (
        <div className = {`col${className}`}>
    {children}
        </div>
    )
}
export default Col