import React, { useEffect, useRef, useState } from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import styles from './Mapbox.module.css'
import searchAddress from '../../services/address'
import geoLocation from '../../services/geoLocation'

interface IProp {
    cep: any
}
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

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_API_KEY
    ? process.env.REACT_APP_MAPBOX_API_KEY
    : ''
const centerLocation: mapboxgl.LngLatLike = [-47.477, -5.5255]

export default function Mapbox(prop: IProp): JSX.Element {
    const url = process.env.REACT_APP_URL_CEP
        ? process.env.REACT_APP_URL_CEP
        : ''
    const { cep } = prop
    const [address, setAddress] = useState<IAddress>()
    const [geolocation, setGeolocation] = useState()
    const [initialized, setinitialized] = useState(false)

    const containerRef = useRef<HTMLDivElement>(null)
    const mapRef = useRef<mapboxgl.Map | null>(null)

    useEffect(() => {
        ;(async () => {
            const response = await searchAddress(url, cep)
            const data = await response.json()
            setAddress(data)
        })()
    }, [cep, url])

    const query = `${address?.logradouro} ${address?.localidade}`

    useEffect(() => {
        ;(async () => {
            const response = await geoLocation(query)
            const data = await response.json()
            setGeolocation(data.features[0].center)

            if (mapRef.current !== null) {
                mapRef.current.flyTo({
                    center: [
                        data.features[0].center[0],
                        data.features[0].center[1],
                    ],
                    essential: true,
                })
                new mapboxgl.Marker()
                    .setLngLat([
                        data.features[0].center[0],
                        data.features[0].center[1],
                    ])
                    .addTo(mapRef.current)
            }
        })()
    }, [geolocation, query])

    useEffect(() => {
        let mounted = true
        if (containerRef.current !== null) {
            setinitialized(false)

            mapRef.current = new mapboxgl.Map({
                container: containerRef.current,
                style: 'mapbox://styles/mapbox/streets-v11',
                center: centerLocation,
                zoom: 13,
            })

            mapRef.current.on('load', () => {
                if (mounted !== false) {
                    setinitialized(true)
                }
            })
        }

        return () => {
            mounted = false
            mapRef.current?.remove()
        }
    }, [mapRef, containerRef])

    return (
        <div className={styles.container} ref={containerRef}>
            Mapa {initialized}
        </div>
    )
}
