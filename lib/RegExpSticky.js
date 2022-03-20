'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const RegExpSticky = GetUncurriedThisIntrinsic('get RegExp.prototype.sticky');

module.exports = RegExpSticky;
