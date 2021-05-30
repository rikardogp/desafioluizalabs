const searchAddress = (url: string, cep: string): Promise<Response> => {
    return fetch(`${url}${cep}/json/`)
}

export default searchAddress
