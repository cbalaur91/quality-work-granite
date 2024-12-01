'use client'

import { useEffect, useRef } from 'react'
import { Loader } from '@googlemaps/js-api-loader'
import type { GoogleMapsProps } from '@/types/google-maps'
import type { } from '@googlemaps/js-api-loader'

export default function GoogleMap({
  address,
  zoom = 15,
  height = '450px',
  width = '100%',
}: GoogleMapsProps) {
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
        version: 'weekly',
        libraries: ['maps', 'places']
      })

      const { Map } = await loader.importLibrary('maps')
      //const { Geocoder } = await loader.importLibrary('places')
      const geocoder = new google.maps.Geocoder()

      geocoder.geocode(
        { address },
        async (
          results: google.maps.GeocoderResult[] | null,
          status: google.maps.GeocoderStatus
        ) => {
          if (status === 'OK' && results?.[0]) {
            const map = new Map(mapRef.current!, {
              center: results[0].geometry.location,
              zoom,
              mapTypeControl: false,
              streetViewControl: false,
              fullscreenControl: false,
            })

            new google.maps.Marker({
              map,
              position: results[0].geometry.location,
            })
          }
        }
      )
    }

    initMap()
  }, [address, zoom])

  return <div ref={mapRef} style={{ width, height }} />
} 