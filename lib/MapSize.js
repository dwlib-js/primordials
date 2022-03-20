'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const MapSize = GetUncurriedThisIntrinsic('get Map.prototype.size');

module.exports = MapSize;
