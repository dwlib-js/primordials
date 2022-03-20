'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const StringIteratorNext = GetUncurriedThisIntrinsic('StringIteratorPrototype.next');

module.exports = StringIteratorNext;
