import GetIntrinsicOrThrow from '#intrinsics/GetIntrinsicOrThrow';
import FunctionApplyBind from './FunctionApplyBind.mjs';
import Int16Array from './Int16Array.mjs';

const TypedArrayOf = GetIntrinsicOrThrow('TypedArray.of');

const Int16ArrayOfApply = FunctionApplyBind(TypedArrayOf, Int16Array);

export default Int16ArrayOfApply;
