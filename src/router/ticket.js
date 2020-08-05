export default[
    {
        path: '/tickets/manage',
        component: () => import ('../views/Tickets/Ticket.vue'),
        name: 'ticket',
    },
    {
        path: '/tickets/exchange',
        component: () => import ('../views/Tickets/Exchange.vue'),
        name: 'exchange',
    },
    {
        path: '/tickets/voucher',
        component: () => import ('../views/Tickets/Voucher.vue'),
        name: 'voucher',
    },
    {
        path: '/tickets/combination',
        component: () => import ('../views/Tickets/Combination.vue'),
        name: 'combination',
    },
    {
        path: '/tickets/distribution',
        component: () => import ('../views/Tickets/Distribution.vue'),
        name: 'distribution',
    },

    
]