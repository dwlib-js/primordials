'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const DataViewSetFloat64 = GetUncurriedThisIntrinsic('DataView.prototype.setFloat64');

module.exports = DataViewSetFloat64;
