'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const ObjectHasOwnProperty = GetUncurriedThisIntrinsic('Object.prototype.hasOwnProperty');

module.exports = ObjectHasOwnProperty;
