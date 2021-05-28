import React, { useState } from "react"
import Keys from "./keys"

export default function Main(params) {
    const [state, setState] = useState({
        api: Keys.API_KEY,
        baseUrl: Keys.BASE_URL,
        weatherimg: "",
        name: "",
    })

    async function apiFetch(value) {
        let response = await fetch(state.baseUrl + value + state.api)
        if (!response.ok) {
            setState((prev) => ({
                ...prev,
                weatherimg: "",
                name: "",
            }))
            return
        }
        let data = await response.json()
        setState((prev) => ({
            ...prev,
            weatherimg:
                "http://openweathermap.org/img/wn/" +
                data.weather[0].icon +
                "@4x.png",
            name: data.name,
        }))
    }

    return (
        <>
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search..."
                    className="search-bar"
                    onChange={(e) => apiFetch(e.target.value)}
                    //value={query}
                    // onKeyPress={search}
                />
            </div>
            <div>
                <img src={state.weatherimg} alt="" />
                <h1 style={{ color: "red" }}>{state.name}</h1>
            </div>
        </>
    )
}
