import { FC } from 'react'

interface Props {
    weatherData?: Object | void
}

const Weather: FC<Props> = (props) => {
    return (
        <>
            {props.weatherData && props.weatherData.data
                ? props.weatherData.data.name
                : ''}
        </>
    )
}

export default Weather
