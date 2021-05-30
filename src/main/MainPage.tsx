import React, { useCallback, useState } from 'react'
import styles from './MainPage.module.css'
import Mapbox from './components/Map/Mapbox'
import Address from './components/Address/Address'
import Search from './components/Search/Search'
import searchAddress from './services/address'
import { IAddress } from './interfaces/interface'

export default function MainPage(): JSX.Element {
    const [cep, setCep] = useState<string>('')
    const [address, setAddress] = useState<IAddress | null>(null)
    const url = process.env?.REACT_APP_URL_CEP ?? ''
    function onChangeCep(cepAddress: string): void {
        setCep(cepAddress)
    }
    const handleSubmit = useCallback(async () => {
        const response = await searchAddress(url, cep)
        const data = await response.json()
        setAddress(data)
    }, [cep, url])
    const mapBoxAddress = address
        ? `${address?.logradouro} ${address?.localidade}`
        : null
    return (
        <div className={styles.container}>
            <div className={styles.searchContainer}>
                <Search
                    onChangeCep={onChangeCep}
                    onSubmit={handleSubmit}
                    cep={cep}
                />
            </div>
            <div className={styles.infoContainer}>
                <div className={styles.addressContainer}>
                    <Address address={address} />
                </div>
                <div className={styles.mapContainer}>
                    <Mapbox address={mapBoxAddress} />
                </div>
            </div>
        </div>
    )
}
