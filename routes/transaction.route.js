var express = require('express');
var router = express.Router();
var controller = require('../controllers/transaction.controller');
var authAdminMiddleware = require('../middlewares/admin_auth.middlewares');

router.get("/", authAdminMiddleware.requireAuth,controller.create);

router.post("/", authAdminMiddleware.requireAuth,controller.postCreate);

router.get("/:id/complete", authAdminMiddleware.requireAuth,controller.getComplete);

module.exports = router;