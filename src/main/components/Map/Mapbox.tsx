import React, { useEffect, useRef, useState } from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import styles from './Mapbox.module.css'

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_API_KEY
    ? process.env.REACT_APP_MAPBOX_API_KEY
    : ''
const centerLocation: mapboxgl.LngLatLike = [-47.477, -5.5255]

export default function Mapbox(): JSX.Element {
    const [initialized, setinitialized] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)
    const mapRef = useRef<mapboxgl.Map | null>(null)

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

            new mapboxgl.Marker()
                .setLngLat([-47.477, -5.5255])
                .addTo(mapRef.current)
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
