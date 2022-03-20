'use strict';

const FunctionApplyBind = require('./FunctionApplyBind');
const String = require('./String');
const StringFromCodePoint = require('./StringFromCodePoint');

const StringFromCodePointApply = FunctionApplyBind(StringFromCodePoint, String);

module.exports = StringFromCodePointApply;
