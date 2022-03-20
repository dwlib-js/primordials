import GetIntrinsicOrThrow from '#intrinsics/GetIntrinsicOrThrow';
import Float32Array from './Float32Array.mjs';
import FunctionBind from './FunctionBind.mjs';

const TypedArrayFrom = GetIntrinsicOrThrow('TypedArray.from');

const Float32ArrayFrom = FunctionBind(TypedArrayFrom, Float32Array);

export default Float32ArrayFrom;
