const path = require('path')

// moduleOptions could pass config param from nuxt.config.js
export default function registerModules(moduleOptions) {

    // automactic register all components of the modules
    this.nuxt.hook('components:dirs', (dirs) => {
        // add ./components dir to the list
        dirs.push({
            path: path.resolve(__dirname, 'components')
        })
    })

    // add modules routes to global router list
    this.extendRoutes((routes) => {
        routes.unshift({
            name: 'my-account',
            path: '/my-account',
            component: path.resolve(__dirname, 'pages/index.vue')
        })
    })

    // register store plugin
    this.addPlugin(path.resolve(__dirname, 'store/registerMy-account.js'))

}