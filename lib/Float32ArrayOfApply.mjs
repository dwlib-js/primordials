import GetIntrinsicOrThrow from '#intrinsics/GetIntrinsicOrThrow';
import Float32Array from './Float32Array.mjs';
import FunctionApplyBind from './FunctionApplyBind.mjs';

const TypedArrayOf = GetIntrinsicOrThrow('TypedArray.of');

const Float32ArrayOfApply = FunctionApplyBind(TypedArrayOf, Float32Array);

export default Float32ArrayOfApply;
