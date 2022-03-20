import GetIntrinsicOrThrow from '#intrinsics/GetIntrinsicOrThrow';
import FunctionApplyBind from './FunctionApplyBind.mjs';
import Int8Array from './Int8Array.mjs';

const TypedArrayOf = GetIntrinsicOrThrow('TypedArray.of');

const Int8ArrayOfApply = FunctionApplyBind(TypedArrayOf, Int8Array);

export default Int8ArrayOfApply;
