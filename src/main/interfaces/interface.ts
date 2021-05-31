export interface IAddress {
    cep: string
    logradouro: string
    complemento: string
    bairro: string
    localidade: string
    uf: string
    ibge: string
    gia: string
    ddd: string
    siafi: string
    erro?: string
}

export interface IPropAddress {
    address: IAddress | null
}

export interface IPropMapbox {
    address: string | null
}

export interface IPropSearch {
    onChangeCep: any
    onSubmit: any
    cep: string
}
