/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': { view: 'pages/homepage' },

  'get /residents': 'ResidentsController.getAll',
  'get /residents/:id': 'ResidentsController.getById', // /example/112
  'post /residents': 'ResidentsController.create',
  'delete /residents': 'ResidentsController.del',
  'put /residents': 'ResidentsController.update',

  'get /categories': 'CategoriesController.getAll',
  'get /categories/:id': 'CategoriesController.getById',
  'post /categories/:params': 'CategoriesController.create',
  'delete /categories': 'CategoriesController.del',
  'put /categories': 'CategoriesController.update',

  'get /requests': 'RequestsController.getAll',
  'get /requests/:id': 'RequestsController.getById',
  'post /requests/:params': 'RequestsController.create',
  'delete /requests': 'RequestsController.del',
  'put /requests': 'RequestsController.update',

  'get /companies': 'CompaniesController.getAll',
  'get /companies/:id': 'CompaniesController.getById',
  'post /companies/:params': 'CompaniesController.create',
  'delete /companies': 'CompaniesController.del',
  'put /companies': 'CompaniesController.update',

  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
