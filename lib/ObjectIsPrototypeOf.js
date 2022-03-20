'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const ObjectIsPrototypeOf = GetUncurriedThisIntrinsic('Object.prototype.isPrototypeOf');

module.exports = ObjectIsPrototypeOf;
