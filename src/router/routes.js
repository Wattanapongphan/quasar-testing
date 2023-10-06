
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') }
    ]
  },


  // Always leave this as last one,
  // but you can also remove it
{
  path: '/in',
  component: () => import('pages/InputPage.vue')
},
{
  path: '/fn',
  component: () => import('pages/FunctionPage.vue')
},
{
  path: '/id',
  component: () => import('pages/IndexPage.vue')
},
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  },
]

export default routes
