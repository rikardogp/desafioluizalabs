import React, { useEffect, useRef, useState } from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import styles from './Mapbox.module.css'

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_API_KEY!
const centerLocation: mapboxgl.LngLatLike = [5, 34]

export default function Mapbox(): JSX.Element {
    const [initialized, setinitialized] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)
    const mapRef = useRef<mapboxgl.Map | null>(null)

    useEffect(() => {
        if (containerRef.current === null) return

        let mounted = true
        setinitialized(false)

        mapRef.current = new mapboxgl.Map({
            container: containerRef.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: centerLocation,
            zoom: 1,
        })

        mapRef.current.on('load', () => {
            if (mounted === false) return
            setinitialized(true)
        })
        return () => {
            mounted = false
            mapRef.current!.remove()
        }
    }, [mapRef, containerRef])

    return (
        <div className={styles.container} ref={containerRef}>
            Mapa
        </div>
    )
}
