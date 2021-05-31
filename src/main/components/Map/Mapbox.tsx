import React, { useEffect, useRef, useState } from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import styles from './Mapbox.module.css'
import geoLocation from '../../services/geoLocation'
import { IPropMapbox } from '../../interfaces/interface'

mapboxgl.accessToken = process.env?.REACT_APP_MAPBOX_API_KEY ?? ''

const centerLocation: mapboxgl.LngLatLike = [-46.6388, -23.5489]
const marker = new mapboxgl.Marker()

export default function Mapbox({ address }: IPropMapbox): JSX.Element {
    const [initialized, setInitialized] = useState(false)

    const containerRef = useRef<HTMLDivElement>(null)
    const mapRef = useRef<mapboxgl.Map | null>(null)

    useEffect(() => {
        if (!address || address === 'undefined undefined') {
            marker.remove()
            return
        }
        ;(async () => {
            const response = await geoLocation(address)
            const data = await response.json()

            if (mapRef.current !== null) {
                mapRef.current.flyTo({
                    center: [
                        data.features[0].center[0],
                        data.features[0].center[1],
                    ],
                    zoom: 14,
                    maxDuration: 7000,
                })
                marker
                    .setLngLat([
                        data.features[0].center[0],
                        data.features[0].center[1],
                    ])
                    .addTo(mapRef.current)
            }
        })()
    }, [address])

    useEffect(() => {
        let mounted = true
        if (containerRef.current !== null) {
            setInitialized(false)

            mapRef.current = new mapboxgl.Map({
                container: containerRef.current,
                style: 'mapbox://styles/mapbox/streets-v11',
                center: centerLocation,
                zoom: 14,
            })

            mapRef.current.on('load', () => {
                if (mounted !== false) {
                    setInitialized(true)
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
