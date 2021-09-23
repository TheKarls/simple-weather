import { useState, useRef } from 'react'
import type { NextPage } from 'next'
import Head, { defaultHead } from 'next/head'
import Input from '../src/components/Input/Input'
import axios from 'axios'
import Weather from '../src/components/Weather/Weather'
import OtherDaysCards from '../src/components/OtherDayCards/OtherDaysCards'

export default function Index() {
    // STATE
    const [city, setCity] = useState('')
    const weatherData = useRef<Object | void>({})

    const getCity = (newCity: string) => {
        setCity(newCity)
    }

    axios
        .get(
            '//api.openweathermap.org/data/2.5/weather?q=' +
                city +
                process.env.NEXT_PUBLIC_API_KEY
        )
        .catch((error) => {
            if (error.response === 400 || error.response === 404)
                console.clear()
        })
        .then((response) => {
            weatherData.current = response
            console.log(response)
        })

    return (
        <div
            className="container"
            style={{ display: 'flex', flexDirection: 'column' }}
        >
            <Input getCity={getCity} />
            <Weather weatherData={weatherData.current} />
            <OtherDaysCards />
        </div>
    )
}
