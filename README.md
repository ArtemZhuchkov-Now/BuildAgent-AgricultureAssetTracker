# 🌾 AgriTech Smart Asset Management System

**Smart farm equipment asset management system with IoT monitoring, predictive maintenance, and real-time operational dashboards for the agricultural industry**

[![ServiceNow](https://img.shields.io/badge/ServiceNow-Fluent%20DSL-00A1C9)](https://developer.servicenow.com/dev.do)
[![React](https://img.shields.io/badge/React-18.2.0-61DAFB)](https://reactjs.org/)
[![License](https://img.shields.io/badge/License-UNLICENSED-red.svg)](LICENSE)

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Architecture](#architecture)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [API Reference](#api-reference)
- [Contributing](#contributing)
- [Deployment](#deployment)
- [Screenshots](#screenshots)

---

## 🎯 Overview

The AgriTech Smart Asset Management System is a comprehensive ServiceNow application designed to revolutionize farm equipment management through IoT integration, predictive maintenance algorithms, and real-time operational dashboards. Built for modern agricultural enterprises, this system provides complete visibility and control over farm equipment assets.

### Key Benefits

- **📊 Real-time Monitoring**: Live tracking of equipment status, location, and performance metrics
- **🔧 Predictive Maintenance**: Automated maintenance scheduling based on operating hours and sensor data
- **🌍 GPS Tracking**: Real-time location monitoring with interactive map visualization
- **⚡ IoT Integration**: Support for temperature sensors, fuel monitors, and diagnostic systems
- **📱 Mobile-Responsive**: Access your equipment data anywhere, anytime
- **💰 Cost Optimization**: Reduce downtime and maintenance costs through intelligent scheduling

---

## ✨ Features

### 🚜 Equipment Management
- **Comprehensive Asset Registry**: Track tractors, harvesters, planters, irrigation systems, and more
- **Detailed Equipment Profiles**: Manufacturer details, serial numbers, warranty information
- **Operational Status Tracking**: Active, maintenance, repair, idle, and retired status management
- **Health Status Monitoring**: Equipment condition assessment from excellent to critical

### 📍 Real-time Monitoring
- **Live GPS Tracking**: Real-time location updates with Leaflet map integration
- **IoT Sensor Data**: Temperature, fuel level, vibration monitoring
- **Diagnostic Codes**: Automated fault detection and reporting
- **Operating Hours**: Precise usage tracking for maintenance planning

### 🔧 Maintenance Management
- **Automated Scheduling**: Business rule-driven maintenance planning
- **Hour-based Intervals**: Customizable maintenance schedules (default: 250 hours)
- **Maintenance History**: Complete service record tracking
- **Predictive Analytics**: Health status updates based on sensor data

### 📊 Interactive Dashboard
- **Executive Overview**: Key metrics and KPIs at a glance
- **Equipment Grid View**: Visual status overview with color-coded health indicators
- **Advanced Filtering**: Search and filter by status, type, or location
- **Real-time Updates**: Data refresh every 30 seconds for live monitoring

---

## 🛠 Technology Stack

### Backend (ServiceNow)
- **ServiceNow Fluent DSL**: Modern TypeScript-based metadata definition
- **Business Rules**: Automated maintenance scheduling and health updates
- **REST APIs**: RESTful endpoints for data access
- **Real-time Sync**: Two-way synchronization with ServiceNow platform

### Frontend (React)
- **React 18.2.0**: Modern component-based UI framework
- **Leaflet Maps**: Interactive GPS visualization
- **Responsive Design**: Mobile-first responsive layout
- **Real-time Updates**: Live data synchronization

### Development Tools
- **ServiceNow SDK 4.0.2**: Latest development toolkit
- **ESLint**: Code quality and consistency
- **TypeScript**: Type-safe development
- **Git**: Version control and collaboration

---

## 🏗 Architecture

```
src/
├── fluent/                    # ServiceNow Fluent DSL definitions
│   ├── tables/
│   │   └── farm-equipment.now.ts    # Equipment data model
│   ├── business-rules/
│   │   └── maintenance-scheduler.now.ts  # Automated maintenance logic
│   ├── ui-pages/
│   │   └── agritech-dashboard.now.ts     # Dashboard UI page
│   ├── index.now.ts           # Application entry point
│   └── sample-data.now.ts     # Sample equipment records
├── client/                    # React frontend application
│   ├── app.jsx               # Main application component
│   ├── components/
│   │   └── EquipmentMap.jsx  # GPS map visualization
│   └── utils/
│       └── fields.js         # ServiceNow field utilities
└── server/                   # Server-side business logic
    └── maintenance-scheduler.js      # Maintenance calculation logic
```

---

## 🚀 Getting Started

### Prerequisites

- ServiceNow Developer Instance
- Node.js 16.x or higher
- ServiceNow SDK 4.0.2
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/agritech-smart-asset-management.git
   cd agritech-smart-asset-management
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure ServiceNow connection**
   ```bash
   # Update now.config.json with your instance details
   {
     "scope": "x_snc_agritech_ass",
     "name": "Agritech Ass"
   }
   ```

4. **Build the application**
   ```bash
   npm run build
   ```

5. **Deploy to ServiceNow**
   ```bash
   npm run deploy
   ```

### Development Workflow

```bash
# Build and watch for changes
npm run build

# Deploy to instance
npm run deploy

# Generate type definitions
npm run types

# Transform existing metadata
npm run transform
```

---

## 📱 Usage

### Dashboard Access

Access the AgriTech dashboard at: `https://your-instance.service-now.com/x_snc_agritech_ass_dashboard.do`

### Navigation

- **📊 Dashboard**: Executive overview with key metrics and equipment status
- **📋 Equipment List**: Detailed table view with search and filtering
- **🌍 Live Map**: Real-time GPS tracking and location visualization

### Equipment Management

1. **Add New Equipment**: Create equipment records with complete specifications
2. **Monitor Status**: Track operational and health status in real-time
3. **Schedule Maintenance**: Automated scheduling based on operating hours
4. **View Analytics**: Access performance metrics and operational insights

---

## 🔌 API Reference

### REST Endpoints

```javascript
// Get all equipment
GET /api/now/table/x_snc_agritech_ass_farm_equipment

// Get specific equipment
GET /api/now/table/x_snc_agritech_ass_farm_equipment/{sys_id}

// Update equipment status
PUT /api/now/table/x_snc_agritech_ass_farm_equipment/{sys_id}
```

### Equipment Fields

| Field | Type | Description |
|-------|------|-------------|
| `equipment_name` | String | Equipment identifier |
| `equipment_type` | Choice | Tractor, Harvester, Planter, etc. |
| `operational_status` | Choice | Active, Maintenance, Repair, Idle, Retired |
| `health_status` | Choice | Excellent, Good, Fair, Poor, Critical |
| `gps_latitude` | Decimal | Current GPS latitude |
| `gps_longitude` | Decimal | Current GPS longitude |
| `fuel_level` | Integer | Fuel percentage (0-100) |
| `operating_hours` | Decimal | Total operating hours |

---

## 🎨 Screenshots

### Dashboard Overview
*Executive dashboard with key metrics and equipment status overview*

### Equipment List
*Detailed table view with advanced filtering and search capabilities*

### Live Map
*Real-time GPS tracking with interactive map visualization*

### Equipment Detail
*Comprehensive equipment profile with IoT sensor data*

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit your changes** (`git commit -m 'Add some AmazingFeature'`)
4. **Push to the branch** (`git push origin feature/AmazingFeature`)
5. **Open a Pull Request**

### Development Guidelines

- Follow ServiceNow Fluent DSL best practices
- Maintain consistent code formatting with ESLint
- Add comprehensive comments for complex business logic
- Test all functionality before submitting PRs
- Update documentation for new features

---

## 🚀 Deployment

### Production Deployment

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Deploy to production instance**
   ```bash
   npm run deploy
   ```

3. **Verify deployment**
   - Check application scope installation
   - Verify data model integrity
   - Test dashboard functionality
   - Confirm IoT data integration

### Environment Configuration

- **Development**: Use personal developer instance
- **Testing**: Deploy to shared testing environment
- **Production**: Deploy to live ServiceNow instance

---

## 📄 License

This project is licensed under UNLICENSED - see the [LICENSE](LICENSE) file for details.

---

## 🆘 Support

For support and questions:

- **Documentation**: [ServiceNow Developer Portal](https://developer.servicenow.com/dev.do)
- **Issues**: Use GitHub Issues for bug reports and feature requests
- **Community**: ServiceNow Developer Community

---

## 🏆 Acknowledgments

- ServiceNow Developer Community
- React Development Team
- Leaflet Mapping Library
- Agricultural Technology Partners

---

**Built with ❤️ for the agricultural community**

*Empowering farmers with smart technology solutions for efficient equipment management and predictive maintenance.*