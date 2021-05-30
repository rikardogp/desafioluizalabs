import React, { useEffect, useState } from 'react'
import styles from './Address.module.css'

import searchAddress from '../../services/address'

interface IAddress {
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
}
interface IProp {
    cep: any
}

export default function Address(prop: IProp): JSX.Element {
    const url = process.env.REACT_APP_URL_CEP
        ? process.env.REACT_APP_URL_CEP
        : ''
    const { cep } = prop
    const [address, setAddress] = useState<IAddress>()

    useEffect(() => {
        ;(async () => {
            const response = await searchAddress(url, cep)
            const data = await response.json()
            setAddress(data)
        })()
    }, [cep, url])

    return (
        <div className={styles.container}>
            <p className={styles.road}>{address?.logradouro}</p>
            <p className={styles.district}>{address?.bairro}</p>
            <p className={styles.city}>
                {address?.localidade} - {address?.uf}
            </p>
            <p className={styles.cep}>{address?.cep}</p>
        </div>
    )
}
