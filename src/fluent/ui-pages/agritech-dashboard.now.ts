import '@servicenow/sdk/global'
import { UiPage } from '@servicenow/sdk/core'
import dashboardPage from '../../client/index.html'

export const agritech_dashboard = UiPage({
    $id: Now.ID['agritech-dashboard'],
    endpoint: 'x_snc_agritech_ass_dashboard.do',
    html: dashboardPage,
    direct: true
})