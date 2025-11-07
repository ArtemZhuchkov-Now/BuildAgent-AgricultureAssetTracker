import { gs, GlideDateTime, GlideRecord } from '@servicenow/glide'

export function updateMaintenanceSchedule(current, previous) {
    // Calculate next maintenance based on operating hours
    const operatingHours = parseFloat(current.getValue('operating_hours') || '0');
    const maintenanceInterval = parseInt(current.getValue('maintenance_interval_hours') || '250');
    const lastMaintenanceHours = parseFloat(previous ? previous.getValue('operating_hours') || '0' : '0');
    
    // Check if maintenance is due based on hours
    const hoursSinceLastMaintenance = operatingHours - lastMaintenanceHours;
    if (hoursSinceLastMaintenance >= maintenanceInterval) {
        // Schedule next maintenance
        const nextMaintenanceDate = new GlideDateTime();
        nextMaintenanceDate.addDaysUTC(30); // Default to 30 days from now
        
        current.setValue('next_maintenance_due', nextMaintenanceDate.getDate());
        current.setValue('operational_status', 'maintenance');
        
        // Create maintenance alert
        gs.addInfoMessage(`Maintenance required for ${current.getDisplayValue('equipment_name')} - ${hoursSinceLastMaintenance} hours since last service`);
    }
    
    // Check warranty and insurance expiry
    const warrantyExpiry = current.getValue('warranty_expiry');
    const insuranceExpiry = current.getValue('insurance_expiry');
    const today = new GlideDateTime();
    const thirtyDaysFromNow = new GlideDateTime();
    thirtyDaysFromNow.addDaysUTC(30);
    
    if (warrantyExpiry && warrantyExpiry <= thirtyDaysFromNow.getDate()) {
        gs.addErrorMessage(`Warranty expiring soon for ${current.getDisplayValue('equipment_name')}: ${warrantyExpiry}`);
    }
    
    if (insuranceExpiry && insuranceExpiry <= thirtyDaysFromNow.getDate()) {
        gs.addErrorMessage(`Insurance expiring soon for ${current.getDisplayValue('equipment_name')}: ${insuranceExpiry}`);
    }
    
    // Update health status based on diagnostics and operating conditions
    updateHealthStatus(current);
}

function updateHealthStatus(current) {
    const temperature = parseFloat(current.getValue('temperature') || '0');
    const vibrationLevel = parseFloat(current.getValue('vibration_level') || '0');
    const operatingHours = parseFloat(current.getValue('operating_hours') || '0');
    const diagnosticsCode = current.getValue('diagnostics_code');
    
    let healthScore = 100;
    
    // Temperature check (assuming normal range is 70-90°C)
    if (temperature > 100) {
        healthScore -= 30;
    } else if (temperature > 90) {
        healthScore -= 15;
    }
    
    // Vibration check
    if (vibrationLevel > 5) {
        healthScore -= 20;
    } else if (vibrationLevel > 3) {
        healthScore -= 10;
    }
    
    // Operating hours check (higher hours = more wear)
    if (operatingHours > 5000) {
        healthScore -= 20;
    } else if (operatingHours > 3000) {
        healthScore -= 10;
    }
    
    // Diagnostics codes indicate issues
    if (diagnosticsCode && diagnosticsCode !== '') {
        healthScore -= 25;
    }
    
    // Set health status based on score
    let healthStatus = 'excellent';
    if (healthScore < 30) {
        healthStatus = 'critical';
    } else if (healthScore < 50) {
        healthStatus = 'poor';
    } else if (healthScore < 70) {
        healthStatus = 'fair';
    } else if (healthScore < 90) {
        healthStatus = 'good';
    }
    
    current.setValue('health_status', healthStatus);
    
    // Alert for critical equipment
    if (healthStatus === 'critical') {
        gs.addErrorMessage(`CRITICAL ALERT: ${current.getDisplayValue('equipment_name')} requires immediate attention!`);
    }
}