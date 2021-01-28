import React, { Component } from 'react'
import Keys from "./keys";

export default class Main extends Component {

    constructor(props) {
        super(props)

        this.state = {
            api: Keys.API_KEY,
            baseUrl: Keys.BASE_URL,
            jsonData: {},
            weatherimg: ""
        }

        this.apiFetch = this.apiFetch.bind(this)
    }


    // http://api.openweathermap.org/data/2.5/weather?q=Asti&appid=bd6822b0071963e57429ef829170495d

    async apiFetch(value) {
        let response = await fetch(this.state.baseUrl + value + this.state.api)
        let data = await response.json();
        if (data.weather != null) {
            console.log(data.weather[0].main)
            this.setState({
                weatherimg: "http://openweathermap.org/img/wn/"+ data.weather[0].icon +"@4x.png"
            })
        }
    }

    render() {

        return (
            <>
                <div className="search-container">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="search-bar"
                        onChange={(e) => this.apiFetch(e.target.value)}
                    //value={query}
                    // onKeyPress={search}
                    />
                </div>
                <div>
                    <img src={this.state.weatherimg} alt=""/>
                </div>
            </>

        )
    }
}

