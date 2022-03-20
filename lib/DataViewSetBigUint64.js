'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const DataViewSetBigUint64 = GetUncurriedThisIntrinsic('DataView.prototype.setBigUint64');

module.exports = DataViewSetBigUint64;
