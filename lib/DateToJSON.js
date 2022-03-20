'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const DateToJSON = GetUncurriedThisIntrinsic('Date.prototype.toJSON');

module.exports = DateToJSON;
