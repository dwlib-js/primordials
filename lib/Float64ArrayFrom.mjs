import GetIntrinsicOrThrow from '#intrinsics/GetIntrinsicOrThrow';
import Float64Array from './Float64Array.mjs';
import FunctionBind from './FunctionBind.mjs';

const TypedArrayFrom = GetIntrinsicOrThrow('TypedArray.from');

const Float64ArrayFrom = FunctionBind(TypedArrayFrom, Float64Array);

export default Float64ArrayFrom;
