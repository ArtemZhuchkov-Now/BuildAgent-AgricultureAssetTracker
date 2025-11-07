import React, { useState, useEffect, useMemo } from 'react';
import { display, value } from './utils/fields.js';
import EquipmentMap from './components/EquipmentMap.jsx';
import './app.css';

export default function App() {
  const [equipment, setEquipment] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentView, setCurrentView] = useState('dashboard');
  const [selectedEquipment, setSelectedEquipment] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  useEffect(() => {
    loadEquipment();
    // Refresh data every 30 seconds for real-time updates
    const interval = setInterval(loadEquipment, 30000);
    return () => clearInterval(interval);
  }, []);

  const loadEquipment = async () => {
    try {
      const response = await fetch('/api/now/table/x_snc_agritech_ass_farm_equipment?sysparm_display_value=all&sysparm_limit=50', {
        headers: {
          "Accept": "application/json",
          "X-UserToken": window.g_ck
        }
      });
      const data = await response.json();
      setEquipment(data.result || []);
      setLoading(false);
    } catch (error) {
      console.error('Error loading equipment:', error);
      setLoading(false);
    }
  };

  // Calculate dashboard metrics
  const metrics = useMemo(() => {
    const total = equipment.length;
    const active = equipment.filter(eq => display(eq.operational_status) === 'Active').length;
    const maintenance = equipment.filter(eq => display(eq.operational_status) === 'Under Maintenance').length;
    const critical = equipment.filter(eq => display(eq.health_status) === 'Critical').length;
    const avgFuel = equipment.reduce((sum, eq) => sum + (parseInt(value(eq.fuel_level)) || 0), 0) / (total || 1);
    
    return { total, active, maintenance, critical, avgFuel: Math.round(avgFuel) };
  }, [equipment]);

  // Filter equipment based on search and status
  const filteredEquipment = useMemo(() => {
    return equipment.filter(eq => {
      const matchesSearch = display(eq.equipment_name).toLowerCase().includes(searchTerm.toLowerCase()) ||
                          display(eq.manufacturer).toLowerCase().includes(searchTerm.toLowerCase()) ||
                          display(eq.model).toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus = statusFilter === 'all' || display(eq.operational_status).toLowerCase().includes(statusFilter.toLowerCase());
      return matchesSearch && matchesStatus;
    });
  }, [equipment, searchTerm, statusFilter]);

  const handleEquipmentSelect = (eq) => {
    setSelectedEquipment(eq);
    setCurrentView('detail');
  };

  if (loading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
        <p>Loading AgriTech Dashboard...</p>
      </div>
    );
  }

  const renderDashboard = () => (
    <div className="dashboard">
      <div className="metrics-grid">
        <div className="metric-card total">
          <div className="metric-icon">🚜</div>
          <div className="metric-content">
            <h3>{metrics.total}</h3>
            <p>Total Equipment</p>
          </div>
        </div>
        
        <div className="metric-card active">
          <div className="metric-icon">✅</div>
          <div className="metric-content">
            <h3>{metrics.active}</h3>
            <p>Active Units</p>
          </div>
        </div>
        
        <div className="metric-card maintenance">
          <div className="metric-icon">🔧</div>
          <div className="metric-content">
            <h3>{metrics.maintenance}</h3>
            <p>In Maintenance</p>
          </div>
        </div>
        
        <div className="metric-card critical">
          <div className="metric-icon">⚠️</div>
          <div className="metric-content">
            <h3>{metrics.critical}</h3>
            <p>Critical Status</p>
          </div>
        </div>
        
        <div className="metric-card fuel">
          <div className="metric-icon">⛽</div>
          <div className="metric-content">
            <h3>{metrics.avgFuel}%</h3>
            <p>Avg Fuel Level</p>
          </div>
        </div>
      </div>

      <div className="equipment-overview">
        <h2>Equipment Status Overview</h2>
        <div className="equipment-grid">
          {equipment.slice(0, 8).map(eq => (
            <div key={value(eq.sys_id)} 
                 className={`equipment-card ${display(eq.health_status).toLowerCase()}`}
                 onClick={() => handleEquipmentSelect(eq)}>
              <div className="equipment-header">
                <h4>{display(eq.equipment_name)}</h4>
                <span className={`status-badge ${display(eq.operational_status).toLowerCase().replace(' ', '-')}`}>
                  {display(eq.operational_status)}
                </span>
              </div>
              <div className="equipment-info">
                <p><strong>Type:</strong> {display(eq.equipment_type)}</p>
                <p><strong>Location:</strong> {display(eq.current_location) || 'Unknown'}</p>
                <p><strong>Fuel:</strong> {value(eq.fuel_level) || 0}%</p>
                <p><strong>Hours:</strong> {display(eq.operating_hours) || 0}</p>
              </div>
              <div className={`health-indicator ${display(eq.health_status).toLowerCase()}`}>
                {display(eq.health_status)} Health
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderEquipmentList = () => (
    <div className="equipment-list-view">
      <div className="list-controls">
        <input
          type="text"
          placeholder="Search equipment..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <select 
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="filter-select"
        >
          <option value="all">All Status</option>
          <option value="active">Active</option>
          <option value="maintenance">Maintenance</option>
          <option value="repair">Repair</option>
          <option value="idle">Idle</option>
        </select>
      </div>

      <div className="equipment-table">
        <table>
          <thead>
            <tr>
              <th>Equipment Name</th>
              <th>Type</th>
              <th>Status</th>
              <th>Health</th>
              <th>Fuel</th>
              <th>Hours</th>
              <th>Location</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredEquipment.map(eq => (
              <tr key={value(eq.sys_id)}>
                <td>{display(eq.equipment_name)}</td>
                <td>{display(eq.equipment_type)}</td>
                <td>
                  <span className={`status-badge ${display(eq.operational_status).toLowerCase().replace(' ', '-')}`}>
                    {display(eq.operational_status)}
                  </span>
                </td>
                <td>
                  <span className={`health-badge ${display(eq.health_status).toLowerCase()}`}>
                    {display(eq.health_status)}
                  </span>
                </td>
                <td>{value(eq.fuel_level) || 0}%</td>
                <td>{display(eq.operating_hours) || 0}</td>
                <td>{display(eq.current_location) || 'Unknown'}</td>
                <td>
                  <button 
                    onClick={() => handleEquipmentSelect(eq)}
                    className="view-button"
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderEquipmentDetail = () => (
    <div className="equipment-detail">
      <button onClick={() => setCurrentView('list')} className="back-button">
        ← Back to Equipment List
      </button>
      
      {selectedEquipment && (
        <div className="detail-content">
          <div className="detail-header">
            <h2>{display(selectedEquipment.equipment_name)}</h2>
            <span className={`status-badge ${display(selectedEquipment.operational_status).toLowerCase().replace(' ', '-')}`}>
              {display(selectedEquipment.operational_status)}
            </span>
          </div>

          <div className="detail-grid">
            <div className="detail-section">
              <h3>Basic Information</h3>
              <div className="detail-item">
                <label>Manufacturer:</label>
                <span>{display(selectedEquipment.manufacturer)}</span>
              </div>
              <div className="detail-item">
                <label>Model:</label>
                <span>{display(selectedEquipment.model)}</span>
              </div>
              <div className="detail-item">
                <label>Serial Number:</label>
                <span>{display(selectedEquipment.serial_number)}</span>
              </div>
              <div className="detail-item">
                <label>Year:</label>
                <span>{display(selectedEquipment.year_manufactured)}</span>
              </div>
            </div>

            <div className="detail-section">
              <h3>Operational Data</h3>
              <div className="detail-item">
                <label>Operating Hours:</label>
                <span>{display(selectedEquipment.operating_hours) || 0}</span>
              </div>
              <div className="detail-item">
                <label>Fuel Level:</label>
                <span className={parseInt(value(selectedEquipment.fuel_level)) < 20 ? 'low-fuel' : ''}>{value(selectedEquipment.fuel_level) || 0}%</span>
              </div>
              <div className="detail-item">
                <label>Current Location:</label>
                <span>{display(selectedEquipment.current_location) || 'Unknown'}</span>
              </div>
              <div className="detail-item">
                <label>Assigned Operator:</label>
                <span>{display(selectedEquipment.assigned_operator) || 'Unassigned'}</span>
              </div>
            </div>

            <div className="detail-section">
              <h3>Health $[AMP] Maintenance</h3>
              <div className="detail-item">
                <label>Health Status:</label>
                <span className={`health-badge ${display(selectedEquipment.health_status).toLowerCase()}`}>
                  {display(selectedEquipment.health_status)}
                </span>
              </div>
              <div className="detail-item">
                <label>Last Maintenance:</label>
                <span>{display(selectedEquipment.last_maintenance_date) || 'Never'}</span>
              </div>
              <div className="detail-item">
                <label>Next Maintenance Due:</label>
                <span>{display(selectedEquipment.next_maintenance_due) || 'Not Scheduled'}</span>
              </div>
              <div className="detail-item">
                <label>Temperature:</label>
                <span className={parseFloat(value(selectedEquipment.temperature)) > 100 ? 'high-temp' : ''}>{display(selectedEquipment.temperature) || 'N/A'}°C</span>
              </div>
            </div>

            <div className="detail-section">
              <h3>GPS $[AMP] IoT Data</h3>
              <div className="detail-item">
                <label>GPS Latitude:</label>
                <span>{display(selectedEquipment.gps_latitude) || 'N/A'}</span>
              </div>
              <div className="detail-item">
                <label>GPS Longitude:</label>
                <span>{display(selectedEquipment.gps_longitude) || 'N/A'}</span>
              </div>
              <div className="detail-item">
                <label>Vibration Level:</label>
                <span>{display(selectedEquipment.vibration_level) || 'N/A'}</span>
              </div>
              <div className="detail-item">
                <label>Diagnostics Code:</label>
                <span className={display(selectedEquipment.diagnostics_code) ? 'high-temp' : ''}>{display(selectedEquipment.diagnostics_code) || 'None'}</span>
              </div>
            </div>

            <div className="detail-section">
              <h3>Financial Information</h3>
              <div className="detail-item">
                <label>Purchase Price:</label>
                <span>${display(selectedEquipment.purchase_price) || 'N/A'}</span>
              </div>
              <div className="detail-item">
                <label>Current Value:</label>
                <span>${display(selectedEquipment.current_value) || 'N/A'}</span>
              </div>
              <div className="detail-item">
                <label>Warranty Expiry:</label>
                <span>{display(selectedEquipment.warranty_expiry) || 'N/A'}</span>
              </div>
              <div className="detail-item">
                <label>Insurance Expiry:</label>
                <span>{display(selectedEquipment.insurance_expiry) || 'N/A'}</span>
              </div>
            </div>
          </div>

          {display(selectedEquipment.notes) && (
            <div className="detail-section full-width">
              <h3>Notes</h3>
              <p>{display(selectedEquipment.notes)}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );

  const renderMap = () => (
    <EquipmentMap 
      equipment={equipment} 
      onSelectEquipment={handleEquipmentSelect}
    />
  );

  return (
    <div className="agritech-app">
      <header className="app-header">
        <div className="header-content">
          <div className="logo">
            <span className="logo-icon">🌾</span>
            <h1>AgriTech Smart Asset Manager</h1>
          </div>
          <nav className="nav-menu">
            <button 
              className={currentView === 'dashboard' ? 'active' : ''}
              onClick={() => setCurrentView('dashboard')}
            >
              📊 Dashboard
            </button>
            <button 
              className={currentView === 'list' ? 'active' : ''}
              onClick={() => setCurrentView('list')}
            >
              📋 Equipment List
            </button>
            <button 
              className={currentView === 'map' ? 'active' : ''}
              onClick={() => setCurrentView('map')}
            >
              🌍 Live Map
            </button>
            <div className="status-indicator">
              <span className="status-dot online"></span>
              Live Data
            </div>
          </nav>
        </div>
      </header>

      <main className="app-main">
        {currentView === 'dashboard' && renderDashboard()}
        {currentView === 'list' && renderEquipmentList()}
        {currentView === 'detail' && renderEquipmentDetail()}
        {currentView === 'map' && renderMap()}
      </main>

      <footer className="app-footer">
        <p>© 2024 AgriTech Solutions - Smart Farm Equipment Management</p>
        <p>Last updated: {new Date().toLocaleString()} | Total Equipment: {metrics.total} | IoT Sensors Active</p>
      </footer>
    </div>
  );
}