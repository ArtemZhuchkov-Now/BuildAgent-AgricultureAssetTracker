import '@servicenow/sdk/global'
import { 
    Table, 
    StringColumn, 
    ReferenceColumn, 
    DateTimeColumn, 
    DateColumn, 
    DecimalColumn, 
    IntegerColumn, 
    BooleanColumn,
    ChoiceColumn 
} from '@servicenow/sdk/core'

export const x_snc_agritech_ass_farm_equipment = Table({
    name: 'x_snc_agritech_ass_farm_equipment',
    label: 'Farm Equipment',
    schema: {
        equipment_name: StringColumn({ 
            label: 'Equipment Name', 
            maxLength: 100 
        }),
        equipment_type: ChoiceColumn({
            label: 'Equipment Type',
            choices: {
                tractor: { label: 'Tractor', sequence: 0 },
                combine_harvester: { label: 'Combine Harvester', sequence: 1 },
                planter: { label: 'Planter', sequence: 2 },
                cultivator: { label: 'Cultivator', sequence: 3 },
                sprayer: { label: 'Sprayer', sequence: 4 },
                mower: { label: 'Mower', sequence: 5 },
                trailer: { label: 'Trailer', sequence: 6 },
                irrigation_system: { label: 'Irrigation System', sequence: 7 }
            },
            dropdown: 'dropdown_with_none'
        }),
        manufacturer: StringColumn({ 
            label: 'Manufacturer', 
            maxLength: 80 
        }),
        model: StringColumn({ 
            label: 'Model', 
            maxLength: 80 
        }),
        serial_number: StringColumn({ 
            label: 'Serial Number', 
            maxLength: 50 
        }),
        year_manufactured: IntegerColumn({ 
            label: 'Year Manufactured',
            min: 1900,
            max: 2030
        }),
        purchase_date: DateColumn({ 
            label: 'Purchase Date' 
        }),
        purchase_price: DecimalColumn({ 
            label: 'Purchase Price ($)' 
        }),
        current_value: DecimalColumn({ 
            label: 'Current Value ($)' 
        }),
        operational_status: ChoiceColumn({
            label: 'Operational Status',
            choices: {
                active: { label: 'Active', sequence: 0 },
                maintenance: { label: 'Under Maintenance', sequence: 1 },
                repair: { label: 'Under Repair', sequence: 2 },
                idle: { label: 'Idle', sequence: 3 },
                retired: { label: 'Retired', sequence: 4 }
            },
            dropdown: 'dropdown_with_none',
            default: 'active'
        }),
        health_status: ChoiceColumn({
            label: 'Health Status',
            choices: {
                excellent: { label: 'Excellent', sequence: 0 },
                good: { label: 'Good', sequence: 1 },
                fair: { label: 'Fair', sequence: 2 },
                poor: { label: 'Poor', sequence: 3 },
                critical: { label: 'Critical', sequence: 4 }
            },
            dropdown: 'dropdown_with_none',
            default: 'good'
        }),
        operating_hours: DecimalColumn({ 
            label: 'Operating Hours' 
        }),
        fuel_level: IntegerColumn({ 
            label: 'Fuel Level (%)',
            min: 0,
            max: 100
        }),
        fuel_efficiency: DecimalColumn({ 
            label: 'Fuel Efficiency (L/hr)' 
        }),
        gps_latitude: DecimalColumn({ 
            label: 'GPS Latitude' 
        }),
        gps_longitude: DecimalColumn({ 
            label: 'GPS Longitude' 
        }),
        current_location: StringColumn({ 
            label: 'Current Location', 
            maxLength: 120 
        }),
        assigned_operator: ReferenceColumn({
            label: 'Assigned Operator',
            referenceTable: 'sys_user'
        }),
        last_maintenance_date: DateTimeColumn({ 
            label: 'Last Maintenance' 
        }),
        next_maintenance_due: DateColumn({ 
            label: 'Next Maintenance Due' 
        }),
        maintenance_interval_hours: IntegerColumn({ 
            label: 'Maintenance Interval (Hours)',
            default: 250
        }),
        warranty_expiry: DateColumn({ 
            label: 'Warranty Expiry' 
        }),
        insurance_expiry: DateColumn({ 
            label: 'Insurance Expiry' 
        }),
        temperature: DecimalColumn({ 
            label: 'Engine Temperature (°C)' 
        }),
        vibration_level: DecimalColumn({ 
            label: 'Vibration Level' 
        }),
        diagnostics_code: StringColumn({ 
            label: 'Diagnostics Code', 
            maxLength: 20 
        }),
        notes: StringColumn({ 
            label: 'Notes', 
            maxLength: 500 
        }),
        active: BooleanColumn({ 
            label: 'Active',
            default: true
        })
    },
    display: 'equipment_name',
    extensible: false,
    allow_web_service_access: true,
    accessible_from: 'public',
    actions: ['create', 'read', 'update', 'delete'],
    audit: true
})