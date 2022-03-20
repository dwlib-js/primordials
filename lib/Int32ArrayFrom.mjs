import GetIntrinsicOrThrow from '#intrinsics/GetIntrinsicOrThrow';
import FunctionBind from './FunctionBind.mjs';
import Int32Array from './Int32Array.mjs';

const TypedArrayFrom = GetIntrinsicOrThrow('TypedArray.from');

const Int32ArrayFrom = FunctionBind(TypedArrayFrom, Int32Array);

export default Int32ArrayFrom;
