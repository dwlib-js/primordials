'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const DataViewSetInt16 = GetUncurriedThisIntrinsic('DataView.prototype.setInt16');

module.exports = DataViewSetInt16;
