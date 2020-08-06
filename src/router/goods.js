export default[
  {
    path: '/goods/detail',
    component: () => import ('../views/Goods/Goods.vue'),
    name: 'GoodsDetail',
  },
  {
    path: '/goods/newtype',
    component: () => import ('../views/Goods/NewType.vue'),
    name: 'NewType',
  },
  {
    path: '/goods/newgood',
    component: () => import ('../views/Goods/NewGood.vue'),
    name: 'NewGood',
  },
]
