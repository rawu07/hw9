var express = require('express'),
    index   = require('../controllers/index'),
    meow  = require('../controllers/meow'),
    router  = express.Router();

router.route('/').get(index);
router.route('/meow').post(meow);

module.exports = router;
