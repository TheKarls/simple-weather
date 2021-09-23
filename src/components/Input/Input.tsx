import { useState, FC } from "react"
import "./Input.module.css"

interface Props {
    getCity: Function
}

const Input: FC<Props> = (props) => {
    return (
        <div>
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search..."
                    onChange={(e) => {
                        props.getCity(e.target.value)
                    }}
                />
            </div>
        </div>
    )
}

export default Input
