'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const DataViewSetUint32 = GetUncurriedThisIntrinsic('DataView.prototype.setUint32');

module.exports = DataViewSetUint32;
