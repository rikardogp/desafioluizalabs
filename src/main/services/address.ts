const searchAddress = (url: string, cep: string): any => {
    return fetch(`${url + cep}/json/`)
}

export default searchAddress
