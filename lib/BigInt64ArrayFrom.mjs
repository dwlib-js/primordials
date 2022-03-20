import GetIntrinsicOrThrow from '#intrinsics/GetIntrinsicOrThrow';
import BigInt64Array from './BigInt64Array.mjs';
import FunctionBind from './FunctionBind.mjs';

const TypedArrayFrom = GetIntrinsicOrThrow('TypedArray.from');

const BigInt64ArrayFrom = FunctionBind(TypedArrayFrom, BigInt64Array);

export default BigInt64ArrayFrom;
