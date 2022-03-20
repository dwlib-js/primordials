import GetIntrinsicOrThrow from '#intrinsics/GetIntrinsicOrThrow';
import Float32Array from './Float32Array.mjs';
import FunctionBind from './FunctionBind.mjs';

const TypedArrayOf = GetIntrinsicOrThrow('TypedArray.of');

const Float32ArrayOf = FunctionBind(TypedArrayOf, Float32Array);

export default Float32ArrayOf;
