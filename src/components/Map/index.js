import React, {useState, useCallback } from 'react';
import { Container } from './style.js';
import { GoogleMap, LoadScript, MarkerF} from '@react-google-maps/api';

const Map = () => {
    const [map, setMap] = useState(null);
    const [makers, setMakers] = useState([])

    const containerStyle = {
        width: '1000px',
        height: '400px'
    }

    const center = {
        lat: -3.745,
        lng: -38.523
    }

    const onLoad = useCallback(map => {
        setMap(map);
    })

    const onClickMap = (mapMouseEvent) => {
        const { lat, lng } = mapMouseEvent.latLng;
        setMakers([...makers,{lat: lat(),lng: lng()}])
    }

    return (
        <Container>
            <LoadScript googleMapsApiKey='AIzaSyAgpAVPnglVxuC8B5qhLIscm3D5uo-HAr4'>
                <GoogleMap
                    center={!!makers.length ? makers[makers.length-1] : center}
                    mapContainerStyle={containerStyle}
                    zoom={15}
                    onLoad={onLoad}
                    onClick={onClickMap}
                >
                    {makers.length && makers.map((locationMaker, key) => (
                        <MarkerF
                        key={key}
                        position={locationMaker}
                        animation="BOUNCE"
                        onClick={(mapMouse) => {
                            console.log(mapMouse);
                        }}
                        />
                    ))}
                </GoogleMap>
            </LoadScript>
        </Container>
    )
}

export default Map;