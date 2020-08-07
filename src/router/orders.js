export default[
    {
        path: '/orders',
        component: () => import ('../views/Orders/OrderProcess.vue'),
        name: 'oprocess',
        children:[
            {
                path: 'property',
                component: () => import ('../views/Orders/PropertyCenter.vue'),
                name: 'property',
            },
            {
                path: 'property/cantcompe',
                component: () => import ('../components/order/cantCompensate.vue'),
                name: 'cantcompe',
            },
            {
                path: 'process',
                component: () => import ('../views/Orders/OrderProcess.vue'),
                name: 'oprocess',
            },
            {
                path: 'search',
                component: () => import ('../views/Orders/OrderSearch.vue'),
                name: 'osearch',
            },
            {
                path: 'setting',
                component: () => import ('../views/Orders/OrderSetting.vue'),
                name: 'osetting',
            },
            {
                path: 'reservation',
                component: () => import ('../views/Orders/Reservation.vue'),
                name: 'oreservation',
            }

        ]
    },
    
    
]