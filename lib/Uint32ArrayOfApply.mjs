import GetIntrinsicOrThrow from '#intrinsics/GetIntrinsicOrThrow';
import FunctionApplyBind from './FunctionApplyBind.mjs';
import Uint32Array from './Uint32Array.mjs';

const TypedArrayOf = GetIntrinsicOrThrow('TypedArray.of');

const Uint32ArrayOfApply = FunctionApplyBind(TypedArrayOf, Uint32Array);

export default Uint32ArrayOfApply;
