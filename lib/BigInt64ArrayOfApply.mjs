import GetIntrinsicOrThrow from '#intrinsics/GetIntrinsicOrThrow';
import BigInt64Array from './BigInt64Array.mjs';
import FunctionApplyBind from './FunctionApplyBind.mjs';

const TypedArrayOf = GetIntrinsicOrThrow('TypedArray.of');

const BigInt64ArrayOfApply = FunctionApplyBind(TypedArrayOf, BigInt64Array);

export default BigInt64ArrayOfApply;
