import '@servicenow/sdk/global'
import { Record } from '@servicenow/sdk/core'

// Sample Farm Equipment Data
export const tractor01 = Record({
    $id: Now.ID['tractor-01'],
    table: 'x_snc_agritech_ass_farm_equipment',
    data: {
        equipment_name: 'John Deere 8R 370',
        equipment_type: 'tractor',
        manufacturer: 'John Deere',
        model: '8R 370',
        serial_number: 'JD8R370001',
        year_manufactured: 2022,
        purchase_date: '2022-03-15',
        purchase_price: 485000,
        current_value: 420000,
        operational_status: 'active',
        health_status: 'excellent',
        operating_hours: 1250,
        fuel_level: 85,
        fuel_efficiency: 24.5,
        gps_latitude: 40.7589,
        gps_longitude: -95.3677,
        current_location: 'North Field A',
        last_maintenance_date: '2024-11-15 10:30:00',
        next_maintenance_due: '2024-12-30',
        maintenance_interval_hours: 250,
        warranty_expiry: '2027-03-15',
        insurance_expiry: '2025-06-30',
        temperature: 88.5,
        vibration_level: 2.1,
        diagnostics_code: '',
        notes: 'Primary tractor for large field operations. Recently serviced with new hydraulic fluid.',
        active: true
    }
})

export const combineHarvester01 = Record({
    $id: Now.ID['combine-01'],
    table: 'x_snc_agritech_ass_farm_equipment',
    data: {
        equipment_name: 'Case IH Axial-Flow 9250',
        equipment_type: 'combine_harvester',
        manufacturer: 'Case IH',
        model: 'Axial-Flow 9250',
        serial_number: 'CIH9250001',
        year_manufactured: 2021,
        purchase_date: '2021-08-20',
        purchase_price: 650000,
        current_value: 520000,
        operational_status: 'maintenance',
        health_status: 'good',
        operating_hours: 2850,
        fuel_level: 45,
        fuel_efficiency: 32.8,
        gps_latitude: 40.7612,
        gps_longitude: -95.3645,
        current_location: 'Equipment Shed B',
        last_maintenance_date: '2024-10-28 14:15:00',
        next_maintenance_due: '2024-12-15',
        maintenance_interval_hours: 300,
        warranty_expiry: '2026-08-20',
        insurance_expiry: '2025-03-15',
        temperature: 92.3,
        vibration_level: 3.2,
        diagnostics_code: 'M001',
        notes: 'Scheduled maintenance for header alignment and cleaning system inspection.',
        active: true
    }
})

export const sprayer01 = Record({
    $id: Now.ID['sprayer-01'],
    table: 'x_snc_agritech_ass_farm_equipment',
    data: {
        equipment_name: 'Apache AS1240',
        equipment_type: 'sprayer',
        manufacturer: 'Apache',
        model: 'AS1240',
        serial_number: 'AP1240001',
        year_manufactured: 2023,
        purchase_date: '2023-04-10',
        purchase_price: 285000,
        current_value: 265000,
        operational_status: 'active',
        health_status: 'excellent',
        operating_hours: 650,
        fuel_level: 92,
        fuel_efficiency: 18.2,
        gps_latitude: 40.7656,
        gps_longitude: -95.3589,
        current_location: 'South Field C',
        last_maintenance_date: '2024-11-20 09:45:00',
        next_maintenance_due: '2025-01-15',
        maintenance_interval_hours: 200,
        warranty_expiry: '2026-04-10',
        insurance_expiry: '2025-08-20',
        temperature: 82.1,
        vibration_level: 1.8,
        diagnostics_code: '',
        notes: 'New equipment, excellent condition. GPS guidance system calibrated.',
        active: true
    }
})

export const planter01 = Record({
    $id: Now.ID['planter-01'],
    table: 'x_snc_agritech_ass_farm_equipment',
    data: {
        equipment_name: 'Kinze 4900',
        equipment_type: 'planter',
        manufacturer: 'Kinze',
        model: '4900',
        serial_number: 'KZ4900001',
        year_manufactured: 2020,
        purchase_date: '2020-02-28',
        purchase_price: 125000,
        current_value: 85000,
        operational_status: 'idle',
        health_status: 'fair',
        operating_hours: 890,
        fuel_level: 0,
        fuel_efficiency: 12.5,
        gps_latitude: 40.7523,
        gps_longitude: -95.3712,
        current_location: 'Equipment Shed A',
        last_maintenance_date: '2024-09-30 16:20:00',
        next_maintenance_due: '2024-12-01',
        maintenance_interval_hours: 150,
        warranty_expiry: '2025-02-28',
        insurance_expiry: '2025-05-15',
        temperature: 0,
        vibration_level: 0,
        diagnostics_code: '',
        notes: 'Off-season storage. Needs cleaning and seed meter calibration before spring.',
        active: true
    }
})

export const tractor02 = Record({
    $id: Now.ID['tractor-02'],
    table: 'x_snc_agritech_ass_farm_equipment',
    data: {
        equipment_name: 'New Holland T8.435',
        equipment_type: 'tractor',
        manufacturer: 'New Holland',
        model: 'T8.435',
        serial_number: 'NH8435001',
        year_manufactured: 2019,
        purchase_date: '2019-05-12',
        purchase_price: 420000,
        current_value: 285000,
        operational_status: 'repair',
        health_status: 'poor',
        operating_hours: 4250,
        fuel_level: 15,
        fuel_efficiency: 26.8,
        gps_latitude: 40.7545,
        gps_longitude: -95.3634,
        current_location: 'Repair Shop',
        last_maintenance_date: '2024-10-15 11:30:00',
        next_maintenance_due: '2024-11-30',
        maintenance_interval_hours: 250,
        warranty_expiry: '2024-05-12',
        insurance_expiry: '2025-01-20',
        temperature: 105.8,
        vibration_level: 4.7,
        diagnostics_code: 'E102',
        notes: 'Transmission repair in progress. High temperature and vibration detected.',
        active: true
    }
})

export const mower01 = Record({
    $id: Now.ID['mower-01'],
    table: 'x_snc_agritech_ass_farm_equipment',
    data: {
        equipment_name: 'Kuhn FC 3525 F',
        equipment_type: 'mower',
        manufacturer: 'Kuhn',
        model: 'FC 3525 F',
        serial_number: 'KN3525001',
        year_manufactured: 2021,
        purchase_date: '2021-06-15',
        purchase_price: 45000,
        current_value: 35000,
        operational_status: 'active',
        health_status: 'good',
        operating_hours: 380,
        fuel_level: 0, // No fuel tank - PTO powered
        fuel_efficiency: 0,
        gps_latitude: 40.7601,
        gps_longitude: -95.3598,
        current_location: 'Pasture Field D',
        last_maintenance_date: '2024-08-22 13:15:00',
        next_maintenance_due: '2024-12-20',
        maintenance_interval_hours: 100,
        warranty_expiry: '2024-06-15',
        insurance_expiry: '2025-04-10',
        temperature: 0,
        vibration_level: 2.8,
        diagnostics_code: '',
        notes: 'Seasonal hay cutting equipment. Blades sharpened last service.',
        active: true
    }
})

export const irrigation01 = Record({
    $id: Now.ID['irrigation-01'],
    table: 'x_snc_agritech_ass_farm_equipment',
    data: {
        equipment_name: 'Valley 8000 Series Pivot',
        equipment_type: 'irrigation_system',
        manufacturer: 'Valley Irrigation',
        model: '8000 Series',
        serial_number: 'VI8000001',
        year_manufactured: 2018,
        purchase_date: '2018-07-08',
        purchase_price: 180000,
        current_value: 125000,
        operational_status: 'active',
        health_status: 'good',
        operating_hours: 8500,
        fuel_level: 0, // Electric powered
        fuel_efficiency: 0,
        gps_latitude: 40.7578,
        gps_longitude: -95.3665,
        current_location: 'Center Pivot Field E',
        last_maintenance_date: '2024-09-05 08:00:00',
        next_maintenance_due: '2025-03-01',
        maintenance_interval_hours: 1000,
        warranty_expiry: '2023-07-08',
        insurance_expiry: '2025-07-08',
        temperature: 0,
        vibration_level: 1.2,
        diagnostics_code: '',
        notes: 'Automated irrigation system covering 160 acres. Remote monitoring active.',
        active: true
    }
})

export const trailer01 = Record({
    $id: Now.ID['trailer-01'],
    table: 'x_snc_agritech_ass_farm_equipment',
    data: {
        equipment_name: 'Brent 1396 Grain Cart',
        equipment_type: 'trailer',
        manufacturer: 'Brent',
        model: '1396',
        serial_number: 'BR1396001',
        year_manufactured: 2022,
        purchase_date: '2022-09-18',
        purchase_price: 95000,
        current_value: 82000,
        operational_status: 'active',
        health_status: 'excellent',
        operating_hours: 290,
        fuel_level: 0, // No engine
        fuel_efficiency: 0,
        gps_latitude: 40.7534,
        gps_longitude: -95.3678,
        current_location: 'East Field F',
        last_maintenance_date: '2024-10-10 14:30:00',
        next_maintenance_due: '2025-02-01',
        maintenance_interval_hours: 500,
        warranty_expiry: '2025-09-18',
        insurance_expiry: '2025-12-31',
        temperature: 0,
        vibration_level: 0.8,
        diagnostics_code: '',
        notes: 'High-capacity grain cart for harvest operations. Weighing system calibrated.',
        active: true
    }
})

export const cultivator01 = Record({
    $id: Now.ID['cultivator-01'],
    table: 'x_snc_agritech_ass_farm_equipment',
    data: {
        equipment_name: 'Case IH True-Tandem 345',
        equipment_type: 'cultivator',
        manufacturer: 'Case IH',
        model: 'True-Tandem 345',
        serial_number: 'CIH345001',
        year_manufactured: 2017,
        purchase_date: '2017-11-22',
        purchase_price: 85000,
        current_value: 48000,
        operational_status: 'idle',
        health_status: 'critical',
        operating_hours: 1850,
        fuel_level: 0, // No engine
        fuel_efficiency: 0,
        gps_latitude: 40.7512,
        gps_longitude: -95.3701,
        current_location: 'Equipment Shed C',
        last_maintenance_date: '2024-07-12 10:45:00',
        next_maintenance_due: '2024-11-25',
        maintenance_interval_hours: 200,
        warranty_expiry: '2022-11-22',
        insurance_expiry: '2025-02-28',
        temperature: 0,
        vibration_level: 6.2,
        diagnostics_code: 'C205',
        notes: 'CRITICAL: Multiple disc sections need replacement. High vibration detected during last use.',
        active: true
    }
})