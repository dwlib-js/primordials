import GetUncurriedThisIntrinsic from '#abstract/GetUncurriedThisIntrinsic';

const TypedArraySymbolToStringTag = GetUncurriedThisIntrinsic('get TypedArray.prototype[@@toStringTag]');

export default TypedArraySymbolToStringTag;
