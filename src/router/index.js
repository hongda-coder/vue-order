import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
export const router = [{
    path: '/',
    name: 'about',
    component: () => import('@/views/home/about'), // 路由懒加载
    meta: {
      title: '导航页', // 页面标题
      keepAlive: false // keep-alive 标识
    }
  },
  {
    path: '/index',
    name: 'index',
    component: () => import('@/views/home/index'),
    meta: {
      title: '首页',
      keepAlive: false
    }
  },
  {
    path: '/rate_of_error',
    name: 'rate_of_error',
    component: () => import('@/views/rate_of_error/rate_of_error'),
    meta: {
      title: '报告差错率统计',
      keepAlive: false
    }
  },
  {
    path: '/rate_of_timely',
    name: 'rate_of_timely',
    component: () => import('@/views/rate_of_timely/rate_of_timely'),
    meta: {
      title: '报告及时率统计',
      keepAlive: false
    }
  },
  {
    path: '/rate_of_customer',
    name: 'rate_of_customer',
    component: () => import('@/views/rate_of_customer/rate_of_customer'),
    meta: {
      title: '大客户区间统计',
      keepAlive: false
    }
  },
  {
    path: '/address_pact',
    name: 'address_pact',
    component: () => import('@/views/address_pact/address_pact'),
    meta: {
      title: '地区合同分布',
      keepAlive: false
    }
  },
  {
    path: '/address_ent',
    name: 'address_ent',
    component: () => import('@/views/address_ent/address_ent'),
    meta: {
      title: '地区委托分布',
      keepAlive: false
    }
  },
  {
    path: '/person_report',
    name: 'person_report',
    component: () => import('@/views/person_report/person_report'),
    meta: {
      title: '个人报告量统计',
      keepAlive: false
    }
  },
  {
    path: '/person_sample',
    name: 'person_sample',
    component: () => import('@/views/person_sample/person_sample'),
    meta: {
      title: '个人采样统计',
      keepAlive: false
    }
  },
  {
    path: '/person_pact',
    name: 'person_pact',
    component: () => import('@/views/person_pact/person_pact'),
    meta: {
      title: '个人合同统计',
      keepAlive: false
    }
  },
  {
    path: '/person_ent',
    name: 'person_ent',
    component: () => import('@/views/person_ent/person_ent'),
    meta: {
      title: '个人委托统计',
      keepAlive: false
    }
  },
  {
    path: '/science_check',
    name: 'science_check',
    component: () => import('@/views/science_check/science_check'),
    meta: {
      title: '科室检测统计',
      keepAlive: false
    }
  },
  {
    path: '/person_check',
    name: 'person_check',
    component: () => import('@/views/person_check/person_check'),
    meta: {
      title: '个人检测统计',
      keepAlive: false
    }
  },
  {
    path: '/rate_of_instrumen',
    name: 'rate_of_instrumen',
    component: () => import('@/views/rate_of_instrumen/rate_of_instrumen'),
    meta: {
      title: '仪器使用统计',
      keepAlive: false
    }
  },
  {
    path: '/demo_query_speed',
    name: 'demo_query_speed',
    component: () => import('@/views/demo_query_speed/demo_query_speed'),
    meta: {
      title: '样品进度查询',
      keepAlive: false
    }
  },
  {
    path: '/project_query_speed',
    name: 'project_query_speed',
    component: () => import('@/views/project_query_speed/project_query_speed'),
    meta: {
      title: '项目进度查询',
      keepAlive: false
    }
  },
  {
    path: '/ent_state',
    name: 'ent_state',
    component: () => import('@/views/ent_state/ent_state'),
    meta: {
      title: '委托状态分布',
      keepAlive: false
    }
  },
  {
    path: '/address_customer',
    name: 'address_customer',
    component: () => import('@/views/address_customer/address_customer'),
    meta: {
      title: '客户地理分布图',
      keepAlive: false
    }
  },
  {
    path: '/year_pact',
    name: 'year_pact',
    component: () => import('@/views/year_pact/year_pact'),
    meta: {
      title: '年度合同统计',
      keepAlive: false
    }
  },
  {
    path: '/year_ent',
    name: 'year_ent',
    component: () => import('@/views/year_ent/year_ent'),
    meta: {
      title: '年度委托量统计',
      keepAlive: false
    }
  },
  {
    path: '/year_sample',
    name: 'year_sample',
    component: () => import('@/views/year_sample/year_sample'),
    meta: {
      title: '年度采样统计',
      keepAlive: false
    }
  },
  {
    path: '/year_check',
    name: 'year_check',
    component: () => import('@/views/year_check/year_check'),
    meta: {
      title: '年度采样统计',
      keepAlive: false
    }
  },
  {
    path: '/project_pass',
    name: 'project_pass',
    component: () => import('@/views/project_pass/project_pass'),
    meta: {
      title: '项目超标量统计',
      keepAlive: false
    }
  },
  {
    path: '/task_query_speed',
    name: 'task_query_speed',
    component: () => import('@/views/task_query_speed/task_query_speed'),
    meta: {
      title: '任务进度查询',
      keepAlive: false
    }
  },
  {
    path: '/year_report',
    name: 'year_report',
    component: () => import('@/views/year_report/year_report'),
    meta: {
      title: '年度报告统计',
      keepAlive: false
    }
  }







]

const createRouter = () =>
  new Router({
    // mode: 'history', // 如果你是 history模式 需要配置vue.config.js publicPath
    // base: '/app/',
    scrollBehavior: () => ({
      y: 0
    }),
    routes: router
  })

export default createRouter()
