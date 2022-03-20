'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const DataViewBuffer = GetUncurriedThisIntrinsic('get DataView.prototype.buffer');

module.exports = DataViewBuffer;
