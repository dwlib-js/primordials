'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const MapGet = GetUncurriedThisIntrinsic('Map.prototype.get');

module.exports = MapGet;
