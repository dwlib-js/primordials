import GetIntrinsicOrThrow from '#intrinsics/GetIntrinsicOrThrow';
import Float64Array from './Float64Array.mjs';
import FunctionApplyBind from './FunctionApplyBind.mjs';

const TypedArrayOf = GetIntrinsicOrThrow('TypedArray.of');

const Float64ArrayOfApply = FunctionApplyBind(TypedArrayOf, Float64Array);

export default Float64ArrayOfApply;
