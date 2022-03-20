'use strict';

const Array = require('./Array');
const ArrayOf = require('./ArrayOf');
const FunctionApplyBind = require('./FunctionApplyBind');

const ArrayOfApply = FunctionApplyBind(ArrayOf, Array);

module.exports = ArrayOfApply;
