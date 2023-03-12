import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
    {
        path: '/pokemon',
        name: 'layout-pokemon',
        component: () => import(/* WebpackChunkName: "ListaPage" */ '@/modules/pokemon/layouts/PokemonLayout'),
        children: [
            {
                path: 'home',
                name: 'home-pokemon',
                component: () => import(/* WebpackChunkName: "ListaPage" */ '@/modules/pokemon/pages/ListPage')
            },
            {
                path: 'about',
                name: 'about-pokemon',
                component: () => import(/* WebpackChunkName: "AboutPage" */ '@/modules/pokemon/pages/AboutPage')
            },
            {
                path: 'pokemon/:id',
                name: 'pokemon-id',
                component: () => import(/* WebpackChunkName: "PokemonPage" */ '@/modules/pokemon/pages/PokemonPage'),
                props: (router) => {
                    const id = Number(router.params.id);
                    return isNaN(id) ? { id: 1 } : { id };
                }

            },
            {
                path: '',
                redirect: { name: 'home-pokemon' }
            }
        ]
    },
    {
        path: '/dbz',
        name: 'layout-dbz',
        component: () => import(/* WebpackChunkName: "DbzLayout" */ '@/modules/dbz/layouts/DbzLayout'),
        children: [
            {
                path: 'characters',
                name: 'characters-dbz',
                component: () => import(/* WebpackChunkName: "CharacterPage" */ '@/modules/dbz/pages/CharacterPageDbz')
            },
            {
                path: 'about',
                name: 'about-dbz',
                component: () => import(/* WebpackChunkName: "AboutPageDBZ" */ '@/modules/dbz/pages/AboutPageDbz')
            },
            // {
            //     path: 'dbz/:id',
            //     name: 'dbz-id',
            //     component: () => import(/* WebpackChunkName: "PokemonPage" */ '@/modules/dbz/pages/PokemonPage'),
            //     props: (router) => {
            //         const id = Number(router.params.id);
            //         return isNaN(id) ? { id: 1 } : { id };
            //     }

            // },
            {
                path: '',
                redirect: { name: 'characters-dbz' }
            }
        ]
    },
    {
        path: '/:pathMatch(.*)*',
        component: () => import(/* WebpackChunkName: "NotFoundPage" */ '@/modules/pokemon/pages/404')
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

const routerState = () => {
    return new Promise((resolve, reject) => {
        const random = Math.random() * 100
        console.log('random', random)
        if (random > 50) {
            resolve(true)
        } else {
            resolve(false)
        }
    })
}

router.beforeEach(async (to, from, next) => {
    const state = await routerState()
    console.log('state', state)
    state ? next({ name: 'layout-pokemon' }) : next();
});

export default router