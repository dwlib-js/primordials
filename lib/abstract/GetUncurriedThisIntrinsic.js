'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');

const UncurryThis = GetIntrinsicOrThrow('uncurryThis');

const GetUncurriedThisIntrinsic = intrinsicName => {
  const intrinsic = GetIntrinsicOrThrow(intrinsicName);
  return UncurryThis(intrinsic);
}

module.exports = GetUncurriedThisIntrinsic;
