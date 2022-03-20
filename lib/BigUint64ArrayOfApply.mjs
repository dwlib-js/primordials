import GetIntrinsicOrThrow from '#intrinsics/GetIntrinsicOrThrow';
import BigUint64Array from './BigUint64Array.mjs';
import FunctionApplyBind from './FunctionApplyBind.mjs';

const TypedArrayOf = GetIntrinsicOrThrow('TypedArray.of');

const BigUint64ArrayOfApply = FunctionApplyBind(TypedArrayOf, BigUint64Array);

export default BigUint64ArrayOfApply;
