'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const RegExpStringIteratorNext = GetUncurriedThisIntrinsic('RegExpStringIteratorPrototype.next');

module.exports = RegExpStringIteratorNext;
