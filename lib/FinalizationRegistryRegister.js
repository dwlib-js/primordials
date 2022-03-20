'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const FinalizationRegistryRegister = GetUncurriedThisIntrinsic('FinalizationRegistry.prototype.register');

module.exports = FinalizationRegistryRegister;
