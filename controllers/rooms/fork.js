'use strict';

var taunus = require('taunus');
var roomService = require('../../services/room');

function random (req, res, next) {
  taunus.redirect(req, res, '/rooms/' + roomService.create() + '?q=' + req.query.q);
}

module.exports = random;
