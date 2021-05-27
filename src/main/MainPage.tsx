import React from 'react'
import styles from './MainPage.module.css'
import Mapbox from './components/Map/Mapbox'
import Address from './components/Address/Address'
import Search from './components/Search/Search'

export default function MainPage(): JSX.Element {
    return (
        <div className={styles.container}>
            <div className={styles.searchContainer}>
                <Search />
            </div>
            <div className={styles.infoContainer}>
                <div className={styles.addressContainer}>
                    <Address />
                </div>
                <div className={styles.mapContainer}>
                    <Mapbox />
                </div>
            </div>
        </div>
    )
}
