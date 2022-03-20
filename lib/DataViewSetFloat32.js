'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const DataViewSetFloat32 = GetUncurriedThisIntrinsic('DataView.prototype.setFloat32');

module.exports = DataViewSetFloat32;
