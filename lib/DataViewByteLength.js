'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const DataViewByteLength = GetUncurriedThisIntrinsic('get DataView.prototype.byteLength');

module.exports = DataViewByteLength;
