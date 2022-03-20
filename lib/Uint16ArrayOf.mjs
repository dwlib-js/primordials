import GetIntrinsicOrThrow from '#intrinsics/GetIntrinsicOrThrow';
import FunctionBind from './FunctionBind.mjs';
import Uint16Array from './Uint16Array.mjs';

const TypedArrayOf = GetIntrinsicOrThrow('TypedArray.of');

const Uint16ArrayOf = FunctionBind(TypedArrayOf, Uint16Array);

export default Uint16ArrayOf;
