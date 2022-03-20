'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const ObjectPropertyIsEnumerable = GetUncurriedThisIntrinsic('Object.prototype.propertyIsEnumerable');

module.exports = ObjectPropertyIsEnumerable;
