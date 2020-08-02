export default[
    {
        path: '/order',
        component: () => import ('../views/Order/OrderProcess.vue'),
        name: 'Production',
    },
    {
        path: '/order/property',
        component: () => import ('../views/Order/PropertyCenter.vue'),
        name: 'Production',
    },
    {
        path: '/order/process',
        component: () => import ('../views/Order/OrderProcess.vue'),
        name: 'Production',
    },
    {
        path: '/order/search',
        component: () => import ('../views/Order/OrderSearch.vue'),
        name: 'Production',
    },
    {
        path: '/order/setting',
        component: () => import ('../views/Order/OrderSetting.vue'),
        name: 'Production',
    },
    {
        path: '/order/reservation',
        component: () => import ('../views/Order/Reservation.vue'),
        name: 'Production',
    }
    
]