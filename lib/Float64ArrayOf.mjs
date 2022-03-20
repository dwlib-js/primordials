import GetIntrinsicOrThrow from '#intrinsics/GetIntrinsicOrThrow';
import Float64Array from './Float64Array.mjs';
import FunctionBind from './FunctionBind.mjs';

const TypedArrayOf = GetIntrinsicOrThrow('TypedArray.of');

const Float64ArrayOf = FunctionBind(TypedArrayOf, Float64Array);

export default Float64ArrayOf;
