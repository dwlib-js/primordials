import GetIntrinsicOrThrow from '#intrinsics/GetIntrinsicOrThrow';
import FunctionApplyBind from './FunctionApplyBind.mjs';
import Uint16Array from './Uint16Array.mjs';

const TypedArrayOf = GetIntrinsicOrThrow('TypedArray.of');

const Uint16ArrayOfApply = FunctionApplyBind(TypedArrayOf, Uint16Array);

export default Uint16ArrayOfApply;
