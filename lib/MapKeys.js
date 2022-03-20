'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const MapKeys = GetUncurriedThisIntrinsic('Map.prototype.keys');

module.exports = MapKeys;
