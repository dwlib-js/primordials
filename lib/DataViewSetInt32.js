'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const DataViewSetInt32 = GetUncurriedThisIntrinsic('DataView.prototype.setInt32');

module.exports = DataViewSetInt32;
