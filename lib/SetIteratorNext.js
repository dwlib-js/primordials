'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const SetIteratorNext = GetUncurriedThisIntrinsic('SetIteratorPrototype.next');

module.exports = SetIteratorNext;
