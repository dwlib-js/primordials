'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const MapDelete = GetUncurriedThisIntrinsic('Map.prototype.delete');

module.exports = MapDelete;
