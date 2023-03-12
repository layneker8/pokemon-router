

const isAuthenticated = (to, from, next) => {
    return new Promise((resolve, reject) => {
        const random = Math.random() * 100;
        console.log('random', random)
        if (random > 50) {
            next()
        } else {
            return { name: 'layout-dbz' }
        }
    })
}

export default isAuthenticated