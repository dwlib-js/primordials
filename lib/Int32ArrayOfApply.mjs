import GetIntrinsicOrThrow from '#intrinsics/GetIntrinsicOrThrow';
import FunctionApplyBind from './FunctionApplyBind.mjs';
import Int32Array from './Int32Array.mjs';

const TypedArrayOf = GetIntrinsicOrThrow('TypedArray.of');

const Int32ArrayOfApply = FunctionApplyBind(TypedArrayOf, Int32Array);

export default Int32ArrayOfApply;
