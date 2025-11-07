import React, { useEffect, useRef, useState } from 'react';
import { display, value } from '../utils/fields.js';
import './EquipmentMap.css';

export default function EquipmentMap({ equipment, onSelectEquipment }) {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const markersRef = useRef([]);
  const [selectedEquipment, setSelectedEquipment] = useState(null);
  const [mapReady, setMapReady] = useState(false);
  const [mapError, setMapError] = useState(null);

  useEffect(() => {
    initializeMap();
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (mapReady && equipment.length > 0) {
      updateMarkers();
    }
  }, [equipment, mapReady]);

  const initializeMap = async () => {
    try {
      // Wait for container to be ready
      if (!mapRef.current) {
        setTimeout(initializeMap, 100);
        return;
      }

      // Dynamic import for Leaflet
      const L = await import('leaflet');
      
      // Fix for default markers in webpack
      delete L.Icon.Default.prototype._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
      });

      // Initialize map centered on farm location (Nebraska)
      mapInstanceRef.current = L.map(mapRef.current, {
        center: [40.7589, -95.3677],
        zoom: 13,
        zoomControl: true,
        attributionControl: true
      });

      // Add tile layer with error handling
      const tileLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19
      });
      
      tileLayer.addTo(mapInstanceRef.current);
      
      tileLayer.on('tileerror', () => {
        console.warn('Tile loading error, but map will continue to work');
      });

      // Wait a moment for map to fully initialize
      setTimeout(() => {
        if (mapInstanceRef.current) {
          mapInstanceRef.current.invalidateSize();
          setMapReady(true);
        }
      }, 100);

    } catch (error) {
      console.error('Error initializing map:', error);
      setMapError('Failed to load map. Please refresh the page.');
    }
  };

  const updateMarkers = async () => {
    if (!mapInstanceRef.current) return;

    try {
      const L = await import('leaflet');

      // Clear existing markers
      markersRef.current.forEach(marker => {
        mapInstanceRef.current.removeLayer(marker);
      });
      markersRef.current = [];

      // Create markers for each equipment
      const validEquipment = equipment.filter(eq => {
        const lat = parseFloat(value(eq.gps_latitude));
        const lng = parseFloat(value(eq.gps_longitude));
        return lat && lng && !isNaN(lat) && !isNaN(lng);
      });

      validEquipment.forEach(eq => {
        const lat = parseFloat(value(eq.gps_latitude));
        const lng = parseFloat(value(eq.gps_longitude));
        const marker = createEquipmentMarker(L, eq, lat, lng);
        if (marker) {
          marker.addTo(mapInstanceRef.current);
          markersRef.current.push(marker);
        }
      });

      // Fit map to show all markers
      if (markersRef.current.length > 0) {
        const group = new L.featureGroup(markersRef.current);
        mapInstanceRef.current.fitBounds(group.getBounds().pad(0.1));
      }

    } catch (error) {
      console.error('Error updating markers:', error);
    }
  };

  const createEquipmentMarker = (L, eq, lat, lng) => {
    const healthStatus = display(eq.health_status).toLowerCase();
    const operationalStatus = display(eq.operational_status).toLowerCase();
    const fuelLevel = parseInt(value(eq.fuel_level)) || 0;
    const temperature = parseFloat(value(eq.temperature)) || 0;

    // Determine marker color based on status
    let markerColor = '#4CAF50'; // Green for good
    if (healthStatus === 'critical') {
      markerColor = '#F44336'; // Red for critical
    } else if (healthStatus === 'poor') {
      markerColor = '#FF9800'; // Orange for poor
    } else if (operationalStatus === 'under maintenance' || operationalStatus === 'under repair') {
      markerColor = '#FFC107'; // Yellow for maintenance
    } else if (operationalStatus === 'idle') {
      markerColor = '#9E9E9E'; // Gray for idle
    }

    // Create custom icon using CSS classes instead of inline HTML
    const customIcon = L.divIcon({
      className: `custom-equipment-marker ${healthStatus}-health ${operationalStatus.replace(' ', '-')}-status`,
      html: `
        <div class="marker-container" data-color="${markerColor}">
          <div class="marker-icon">${getEquipmentIcon(display(eq.equipment_type))}</div>
          <div class="marker-status"></div>
          ${fuelLevel < 20 && fuelLevel > 0 ? '<div class="fuel-warning">⛽</div>' : ''}
          ${temperature > 100 ? '<div class="temp-warning">🌡️</div>' : ''}
        </div>
      `,
      iconSize: [40, 40],
      iconAnchor: [20, 20],
      popupAnchor: [0, -20]
    });

    // Create popup content with IoT data
    const popupContent = createPopupContent(eq);

    const marker = L.marker([lat, lng], { icon: customIcon })
      .bindPopup(popupContent, {
        maxWidth: 300,
        className: 'custom-popup'
      });

    // Add click event
    marker.on('click', () => {
      setSelectedEquipment(eq);
    });

    return marker;
  };

  const createPopupContent = (eq) => {
    const fuelLevel = parseInt(value(eq.fuel_level)) || 0;
    const temperature = parseFloat(value(eq.temperature)) || 0;
    
    return `
      <div class="equipment-popup">
        <div class="popup-header">
          <h3>${display(eq.equipment_name)}</h3>
          <span class="popup-status ${display(eq.health_status).toLowerCase()}">${display(eq.health_status)}</span>
        </div>
        <div class="popup-content">
          <div class="iot-grid">
            <div class="iot-item">
              <span class="iot-label">Location:</span>
              <span class="iot-value">${display(eq.current_location) || 'Unknown'}</span>
            </div>
            <div class="iot-item">
              <span class="iot-label">Fuel Level:</span>
              <span class="iot-value ${fuelLevel < 20 ? 'critical' : ''}">${fuelLevel}%</span>
            </div>
            <div class="iot-item">
              <span class="iot-label">Operating Hours:</span>
              <span class="iot-value">${display(eq.operating_hours) || 0}</span>
            </div>
            <div class="iot-item">
              <span class="iot-label">Temperature:</span>
              <span class="iot-value ${temperature > 100 ? 'critical' : ''}">${temperature || 'N/A'}°C</span>
            </div>
            <div class="iot-item">
              <span class="iot-label">Vibration:</span>
              <span class="iot-value">${display(eq.vibration_level) || 'N/A'}</span>
            </div>
            <div class="iot-item">
              <span class="iot-label">Operator:</span>
              <span class="iot-value">${display(eq.assigned_operator) || 'Unassigned'}</span>
            </div>
          </div>
          ${display(eq.diagnostics_code) ? 
            `<div class="diagnostics-alert">
              <strong>Diagnostic Code:</strong> ${display(eq.diagnostics_code)}
            </div>` : ''
          }
        </div>
      </div>
    `;
  };

  const getEquipmentIcon = (type) => {
    const icons = {
      'tractor': '🚜',
      'combine_harvester': '🌾',
      'planter': '🌱',
      'cultivator': '🔨',
      'sprayer': '💧',
      'mower': '✂️',
      'trailer': '🚛',
      'irrigation_system': '💦'
    };
    return icons[type] || '🚜';
  };

  const renderMapLegend = () => (
    <div className="map-legend">
      <h4>Equipment Status Legend</h4>
      <div className="legend-items">
        <div className="legend-item">
          <div className="legend-marker excellent"></div>
          <span>Excellent Health</span>
        </div>
        <div className="legend-item">
          <div className="legend-marker good"></div>
          <span>Good Health</span>
        </div>
        <div className="legend-item">
          <div className="legend-marker maintenance"></div>
          <span>Maintenance</span>
        </div>
        <div className="legend-item">
          <div className="legend-marker poor"></div>
          <span>Poor Health</span>
        </div>
        <div className="legend-item">
          <div className="legend-marker critical"></div>
          <span>Critical Status</span>
        </div>
        <div className="legend-item">
          <div className="legend-marker idle"></div>
          <span>Idle</span>
        </div>
      </div>
      <div className="legend-alerts">
        <div class="legend-item">
          <span>⛽</span>
          <span>Low Fuel Warning</span>
        </div>
        <div class="legend-item">
          <span>🌡️</span>
          <span>High Temperature Alert</span>
        </div>
      </div>
    </div>
  );

  const renderMapStats = () => {
    const activeEquipment = equipment.filter(eq => {
      const lat = parseFloat(value(eq.gps_latitude));
      const lng = parseFloat(value(eq.gps_longitude));
      return lat && lng && !isNaN(lat) && !isNaN(lng);
    });
    
    const criticalEquipment = activeEquipment.filter(eq => 
      display(eq.health_status).toLowerCase() === 'critical'
    );

    const lowFuelEquipment = activeEquipment.filter(eq => 
      parseInt(value(eq.fuel_level)) > 0 && parseInt(value(eq.fuel_level)) < 20
    );

    return (
      <div className="map-stats">
        <div className="stat-item">
          <div className="stat-number">{activeEquipment.length}</div>
          <div className="stat-label">Tracked Assets</div>
        </div>
        <div className="stat-item critical">
          <div className="stat-number">{criticalEquipment.length}</div>
          <div className="stat-label">Critical Alerts</div>
        </div>
        <div className="stat-item warning">
          <div className="stat-number">{lowFuelEquipment.length}</div>
          <div className="stat-label">Low Fuel</div>
        </div>
      </div>
    );
  };

  if (mapError) {
    return (
      <div className="map-error">
        <h2>🗺️ Map Loading Error</h2>
        <p>{mapError}</p>
        <button onClick={() => window.location.reload()} className="retry-button">
          🔄 Retry Loading Map
        </button>
      </div>
    );
  }

  return (
    <div className="equipment-map-container">
      <div className="map-header">
        <h2>🌍 Live Equipment Tracking $[AMP] IoT Monitoring</h2>
        <div className="map-controls">
          <button 
            className="refresh-btn"
            onClick={() => updateMarkers()}
            title="Refresh Equipment Locations"
          >
            🔄 Refresh
          </button>
        </div>
      </div>

      {renderMapStats()}
      
      <div className="map-content">
        <div ref={mapRef} className="leaflet-map" style={{ height: '100%', width: '100%' }}></div>
        {renderMapLegend()}
      </div>

      {!mapReady && (
        <div className="map-loading">
          <div className="spinner"></div>
          <p>Loading Interactive Map...</p>
        </div>
      )}

      {selectedEquipment && (
        <div className="selected-equipment-panel">
          <div className="panel-header">
            <h3>Selected Equipment</h3>
            <button onClick={() => setSelectedEquipment(null)}>✕</button>
          </div>
          <div className="panel-content">
            <h4>{display(selectedEquipment.equipment_name)}</h4>
            <div className="quick-stats">
              <div>Status: <span className={`status ${display(selectedEquipment.health_status).toLowerCase()}`}>
                {display(selectedEquipment.health_status)}
              </span></div>
              <div>Fuel: {value(selectedEquipment.fuel_level) || 0}%</div>
              <div>Hours: {display(selectedEquipment.operating_hours) || 0}</div>
            </div>
            <button 
              className="view-full-details"
              onClick={() => onSelectEquipment && onSelectEquipment(selectedEquipment)}
            >
              View Full Details
            </button>
          </div>
        </div>
      )}
    </div>
  );
}