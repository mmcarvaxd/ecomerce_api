'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group(() => {

    /**
     * Categories resource routes
     */
    Route.resource('categories', 'CategoryController').apiOnly()

    /**
     * Categories resource routes
     */
    Route.resource('products', 'ProductController').apiOnly()

    /**
     * Cupon resource routes
     */
    Route.resource('cupons', 'CuponController').apiOnly()

    /**
     * Image resource routes
     */
    Route.resource('images', 'ImageController').apiOnly()

    /**
     * Order resource routes
     */
    Route.resource('orders', 'OrderController').apiOnly()
    
    /**
     * User resource routes
     */
    Route.resource('users', 'UserController').apiOnly()
})
    .prefix('v1/admin')
    .namespace('Admin')