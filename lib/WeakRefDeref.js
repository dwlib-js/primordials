'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const WeakRefDeref = GetUncurriedThisIntrinsic('WeakRef.prototype.deref');

module.exports = WeakRefDeref;
