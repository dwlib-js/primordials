import GetIntrinsicOrThrow from '#intrinsics/GetIntrinsicOrThrow';
import FunctionBind from './FunctionBind.mjs';
import Uint32Array from './Uint32Array.mjs';

const TypedArrayOf = GetIntrinsicOrThrow('TypedArray.of');

const Uint32ArrayOf = FunctionBind(TypedArrayOf, Uint32Array);

export default Uint32ArrayOf;
