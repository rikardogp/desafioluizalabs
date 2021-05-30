import React, { useState } from 'react'
import styles from './MainPage.module.css'
import Mapbox from './components/Map/Mapbox'
import Address from './components/Address/Address'
import Search from './components/Search/Search'

export default function MainPage(): JSX.Element {
    const [cep, setCep] = useState()
    function getCep(cepAd: any): void {
        setCep(cepAd)
    }
    return (
        <div className={styles.container}>
            <div className={styles.searchContainer}>
                <Search cep={getCep} />
            </div>
            <div className={styles.infoContainer}>
                <div className={styles.addressContainer}>
                    <Address cep={cep} />
                </div>
                <div className={styles.mapContainer}>
                    <Mapbox cep={cep} />
                </div>
            </div>
        </div>
    )
}
