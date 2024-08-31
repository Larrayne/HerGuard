import React from 'react';
import './DangerAlerts.css'; 
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'; // Replace with the path to your map image or integrate a map component
import 'leaflet/dist/leaflet.css';



const DangerAlerts = () => {
    return (
        <div className="danger-alerts">
            <header className="alert-header">
                <button className="alert-button">Danger Alerts</button>
            </header>

            <main className="alert-content">
                <h2>Danger Alerts Map</h2>
                <p>Please be aware of the following places that may cause harm for you!</p>
                <div className="map-container">
                <MapContainer center={[-26.2041, 28.0473]} zoom={13} style={{ height: '400px', width: '100%' }}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <Marker position={[-26.2041, 28.0473]}>
                        <Popup>
                           Johannesburg- A sample alert location. Add dynamic alerts here.
                        </Popup>
                    </Marker>
                </MapContainer>
                </div>
                
                <footer className="alert-footer">
                    <p>Be Safe!</p>
                </footer>
            </main>
        </div>
    );
};


export default DangerAlerts;
