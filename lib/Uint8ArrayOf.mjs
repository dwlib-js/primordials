import GetIntrinsicOrThrow from '#intrinsics/GetIntrinsicOrThrow';
import FunctionBind from './FunctionBind.mjs';
import Uint8Array from './Uint8Array.mjs';

const TypedArrayOf = GetIntrinsicOrThrow('TypedArray.of');

const Uint8ArrayOf = FunctionBind(TypedArrayOf, Uint8Array);

export default Uint8ArrayOf;
