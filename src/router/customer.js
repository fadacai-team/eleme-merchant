export default[
    {
        path: '/customer/analyze',
        component: () => import ('../views/Customer/Analyze.vue'),
        name: 'analyze',
    },
    // {
    //     path: '/customer/behavior',
    //     component: () => import ('../views/Customer/Behavior.vue'),
    //     name: 'behavior',
    // },
    {
        path: '/customer/evaluate',
        component: () => import ('../views/Customer/Evaluate.vue'),
        name: 'evaluate',
    }
]
