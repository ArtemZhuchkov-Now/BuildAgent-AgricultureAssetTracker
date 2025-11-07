import '@servicenow/sdk/global'
import { BusinessRule } from '@servicenow/sdk/core'
import { updateMaintenanceSchedule } from '../../server/maintenance-scheduler.js'

export const equipmentMaintenanceRule = BusinessRule({
    $id: Now.ID['equipment_maintenance_rule'],
    name: 'Equipment Maintenance Scheduler',
    table: 'x_snc_agritech_ass_farm_equipment',
    when: 'before',
    action: ['insert', 'update'],
    script: updateMaintenanceSchedule,
    order: 100,
    active: true,
    description: 'Automatically schedules maintenance and updates health status for farm equipment based on operating hours and sensor data'
})