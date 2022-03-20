'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const DataViewByteOffset = GetUncurriedThisIntrinsic('get DataView.prototype.byteOffset');

module.exports = DataViewByteOffset;
