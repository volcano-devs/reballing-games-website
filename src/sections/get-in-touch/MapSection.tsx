'use client'
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'

import 'leaflet-defaulticon-compatibility' // Importa el JS
import {type LatLngExpression} from 'leaflet'

export default function MapComponent() {
  const position = [12.1364171, -86.2778053] as const as LatLngExpression
  const mapUrl = '{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
  const attribution =
    '&copy; <a href="www.openstreetmap.org">OpenStreetMap</a> contributors'

  return (
    <MapContainer
      center={position}
      zoom={18}
      maxZoom={20}
      minZoom={16}
      dragging={false}
      scrollWheelZoom={false}
      style={{height: '200px', width: '100%'}}
    >
      <TileLayer attribution={attribution} url={`https://${mapUrl}`} />
      <Marker position={position}>
        <Popup>Un popup de React Leaflet.</Popup>
      </Marker>
    </MapContainer>
  )
}
