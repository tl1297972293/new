import Vue from 'vue'
import Router from 'vue-router'
import Users from '@/pages/users'
import Department from '@/pages/settings/department.vue'
import Clazz from '@/pages/settings/clazz.vue'
import Teacher from '@/pages/settings/teacher.vue'
import InfoCar from '@/pages/info/car.vue'
import InfoCustomer from '@/pages/info/customer.vue'
import Register from '@/pages/bank/register.vue'
import Load from '@/pages/bank/load.vue'
import Record from '@/pages/bank/record.vue'
import About from '@/pages/bank/about.vue'
import Appointment from '@/pages/bank/appointment.vue'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/users',
      name: 'Users',
      component: Users
    },{
    	path: '/settings/department',
      name: 'Department',
      component: Department
    },{
      path: '/settings/clazz',
      name: 'Clazz',
      component: Clazz
    },{
      path: '/settings/teacher',
      name: 'Teacher',
      component: Teacher
    },{
      path: '/info/car',
      name: 'InfoCar',
      component: InfoCar
    },{
      path: '/info/customer',
      name: 'InfoCustomer',
      component: InfoCustomer
    },{
      path: '/bank/register',
      name: 'Register',
      component: Register
    },{
      path: '/bank/load',
      name: 'Load',
      component: Load
    },{
      path: '/bank/record',
      name: 'Record',
      component: Record
    },{
      path: '/bank/about',
      name: 'About',
      component: About
    },{
      path: '/bank/appointment',
      name: 'Appointment',
      component: Appointment
    }
  ]
})
