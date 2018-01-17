/*
 * user.js
 * Copyright (C) 2017  <liubj@wangsu.com>
 *
 * Distributed under terms of the MIT license.
 */
const express = require('express');
const router = express.Router();
const { create, login, getCapcha, nameRegistedOrNot } = require('../controllers/user');

// TODO 添加剩余的router
router.post('/:name', nameRegistedOrNot);

module.exports = router;
