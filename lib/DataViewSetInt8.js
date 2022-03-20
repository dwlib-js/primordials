'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const DataViewSetInt8 = GetUncurriedThisIntrinsic('DataView.prototype.setInt8');

module.exports = DataViewSetInt8;
