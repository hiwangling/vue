/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const manageRouter = {
  path: '/manage',
  component: Layout,
  redirect: 'manage',
  alwaysShow: true,
  meta: { title: '工作中心', icon: 'shopping' },
  children: [
    {
      path: 'index',
      name: 'ManageList',
      component: () => import('@/views/manage/index'),
      meta: {
        title: '业务大厅',
        noCache: true,
        perms: ['GET /api/v1/service_info/list', 'POST /api/v1/service_info/add', 'POST /api/v1/service_info/edit', 'GET /api/v1/service_info/del']
      }
    },
    {
      path: 'list/:id(\\d+)',
      component: () => import('@/views/manage/list'),
      name: 'list',
      meta: {
        title: '业务大厅',
        noCache: true
      },
      hidden: true
    }
  ]
}
export default manageRouter
