export default[
    {
        path: '/orders',
        component: () => import ('../views/Orders/OrderProcess.vue'),
        name: 'Production',
    },
    {
        path: '/orders/property',
        component: () => import ('../views/Orders/PropertyCenter.vue'),
        name: 'Production',
    },
    {
        path: '/orders/process',
        component: () => import ('../views/Orders/OrderProcess.vue'),
        name: 'Production',
    },
    {
        path: '/orders/search',
        component: () => import ('../views/Orders/OrderSearch.vue'),
        name: 'Production',
    },
    {
        path: '/orders/setting',
        component: () => import ('../views/Orders/OrderSetting.vue'),
        name: 'Production',
    },
    {
        path: '/orders/reservation',
        component: () => import ('../views/Orders/Reservation.vue'),
        name: 'Production',
    }
    
]