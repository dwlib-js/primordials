import GetIntrinsicOrThrow from '#intrinsics/GetIntrinsicOrThrow';
import FunctionApplyBind from './FunctionApplyBind.mjs';
import Uint8Array from './Uint8Array.mjs';

const TypedArrayOf = GetIntrinsicOrThrow('TypedArray.of');

const Uint8ArrayOfApply = FunctionApplyBind(TypedArrayOf, Uint8Array);

export default Uint8ArrayOfApply;
