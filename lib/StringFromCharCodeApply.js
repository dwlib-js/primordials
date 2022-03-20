'use strict';

const FunctionApplyBind = require('./FunctionApplyBind');
const String = require('./String');
const StringFromCharCode = require('./StringFromCharCode');

const StringFromCharCodeApply = FunctionApplyBind(StringFromCharCode, String);

module.exports = StringFromCharCodeApply;
