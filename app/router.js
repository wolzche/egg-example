'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  //router.get('/', controller.home.index);
  router.get('/snake', controller.home.index);
  router.get('/user/:id', controller.user.info);

  router.redirect('/', '/snake', 302);
};
