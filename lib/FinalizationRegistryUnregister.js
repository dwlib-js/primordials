'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const FinalizationRegistryUnregister = GetUncurriedThisIntrinsic('FinalizationRegistry.prototype.unregister');

module.exports = FinalizationRegistryUnregister;
