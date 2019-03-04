const { Router } = require('express');

function getRouter(obj) {
  const router = Router();

  Object.keys(obj).forEach((key) => {
    const controller = obj[key];

    router[controller.method](key, controller.action);
  });

  return router;
}

module.exports = { getRouter };