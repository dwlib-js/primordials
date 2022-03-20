'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const ArrayIteratorNext = GetUncurriedThisIntrinsic('ArrayIteratorPrototype.next');

module.exports = ArrayIteratorNext;
