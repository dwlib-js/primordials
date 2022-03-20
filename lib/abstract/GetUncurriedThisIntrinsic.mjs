import GetIntrinsicOrThrow from '#intrinsics/GetIntrinsicOrThrow';

const UncurryThis = GetIntrinsicOrThrow('uncurryThis');

const GetUncurriedThisIntrinsic = intrinsicName => {
  const intrinsic = GetIntrinsicOrThrow(intrinsicName);
  return UncurryThis(intrinsic);
}

export default GetUncurriedThisIntrinsic;
