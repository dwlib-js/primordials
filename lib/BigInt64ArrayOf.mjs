import GetIntrinsicOrThrow from '#intrinsics/GetIntrinsicOrThrow';
import BigInt64Array from './BigInt64Array.mjs';
import FunctionBind from './FunctionBind.mjs';

const TypedArrayOf = GetIntrinsicOrThrow('TypedArray.of');

const BigInt64ArrayOf = FunctionBind(TypedArrayOf, BigInt64Array);

export default BigInt64ArrayOf;
