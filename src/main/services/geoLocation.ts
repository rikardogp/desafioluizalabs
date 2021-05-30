const geoLocation = (query: string): Promise<Response> => {
    return fetch(
        `${
            process.env.REACT_APP_URL_GEOLOCATION + query
        }.json?autocomplete=false&limit=1&access_token=${
            process.env.REACT_APP_MAPBOX_API_KEY
        }`
    )
}

export default geoLocation
