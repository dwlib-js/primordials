import GetIntrinsicOrThrow from '#intrinsics/GetIntrinsicOrThrow';
import FunctionBind from './FunctionBind.mjs';
import Uint8ClampedArray from './Uint8ClampedArray.mjs';

const TypedArrayFrom = GetIntrinsicOrThrow('TypedArray.from');

const Uint8ClampedArrayFrom = FunctionBind(TypedArrayFrom, Uint8ClampedArray);

export default Uint8ClampedArrayFrom;
