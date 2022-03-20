import GetIntrinsicOrThrow from '#intrinsics/GetIntrinsicOrThrow';
import FunctionBind from './FunctionBind.mjs';
import Uint8ClampedArray from './Uint8ClampedArray.mjs';

const TypedArrayOf = GetIntrinsicOrThrow('TypedArray.of');

const Uint8ClampedArrayOf = FunctionBind(TypedArrayOf, Uint8ClampedArray);

export default Uint8ClampedArrayOf;
