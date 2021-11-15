import React from 'react';
import { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'
import mapIconMarker from '../assets/map_marker.png';

export default function Mapa() {
    const [places, setPlaces] = useState([
        { id: 1, name: "Porto Alegre", lat: -30.033923456952458, lng: -51.22178120825989 },
    ]);

    const containerStyle = { height: '100vh', width: '100%' };
    const center = {
        lat: -30.033923456952458,
        lng: -51.22178120825989
    };

    return (
        <div className="mapa-container">
            <LoadScript
                googleMapsApiKey="AIzaSyBx8qVCztF-s8ZRCNpWeEYGi4xLgGp6h9o"
            >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
            >
            <Marker position={center} icon={mapIconMarker} />
            <></>
            </GoogleMap>
        </LoadScript>
        </div>
    );
}

