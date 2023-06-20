const Router = require('express');
const router = new Router();

const userRouter = require('./userRouter');
const itemRouter = require('./itemRouter');
const typeRouter = require('./typeRouter');

router.use('/user', userRouter);
router.use('/item', itemRouter);
router.use('/type', typeRouter);

module.exports = router;
