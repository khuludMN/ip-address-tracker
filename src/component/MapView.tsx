import { MapContainer, TileLayer, Marker, useMap, } from "react-leaflet";
import { useEffect } from "react"; import L from "leaflet";
import "leaflet/dist/leaflet.css";
interface Props { latitude: number; longitude: number; }
const customIcon = L.divIcon({ className: "custom-marker",
html: '<div class="map-marker"></div>',
iconSize: [40, 40],
iconAnchor: [20, 40], });
const ChangeMapView = ({ latitude, longitude, }: Props) => { const map = useMap();
useEffect(() => { map.flyTo( [latitude, longitude], 13, { duration: 1.5 } ); }, [latitude, longitude, map]);
return null; };
const MapView = ({ latitude, longitude, }: Props) => { return ( <MapContainer center={[latitude, longitude]} zoom={13} scrollWheelZoom={true} className="h-full w-full" > <TileLayer
attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
/>
  <Marker
    position={[latitude, longitude]}
    icon={customIcon}
  />

  <ChangeMapView
    latitude={latitude}
    longitude={longitude}
  />
</MapContainer>
); };
export default MapView;