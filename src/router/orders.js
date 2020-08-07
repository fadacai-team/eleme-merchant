export default[
    {
        path: '/orders',
        component: () => import ('../views/Orders/OrderProcess.vue'),
        name: 'oprocess',
    },
    {
        path: '/orders/property',
        component: () => import ('../views/Orders/PropertyCenter.vue'),
        name: 'property',
    },
    {
        path: '/orders/property/cantcompe',
        component: () => import ('../components/order/cantCompensate.vue'),
        name: 'cantcompe',
    },
    {
        path: '/orders/process',
        component: () => import ('../views/Orders/OrderProcess.vue'),
        name: 'oprocess',
    },
    {
        path: '/orders/search',
        component: () => import ('../views/Orders/OrderSearch.vue'),
        name: 'osearch',
    },
    {
        path: '/orders/setting',
        component: () => import ('../views/Orders/OrderSetting.vue'),
        name: 'osetting',
    },
    {
        path: '/orders/reservation',
        component: () => import ('../views/Orders/Reservation.vue'),
        name: 'oreservation',
    }
    
]