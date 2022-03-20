import GetIntrinsicOrThrow from '#intrinsics/GetIntrinsicOrThrow';
import FunctionApplyBind from './FunctionApplyBind.mjs';
import Uint8ClampedArray from './Uint8ClampedArray.mjs';

const TypedArrayOf = GetIntrinsicOrThrow('TypedArray.of');

const Uint8ClampedArrayOfApply = FunctionApplyBind(TypedArrayOf, Uint8ClampedArray);

export default Uint8ClampedArrayOfApply;
