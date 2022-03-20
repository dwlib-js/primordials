'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const MapHas = GetUncurriedThisIntrinsic('Map.prototype.has');

module.exports = MapHas;
