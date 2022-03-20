import GetIntrinsicOrThrow from '#intrinsics/GetIntrinsicOrThrow';
import FunctionBind from './FunctionBind.mjs';
import Int32Array from './Int32Array.mjs';

const TypedArrayOf = GetIntrinsicOrThrow('TypedArray.of');

const Int32ArrayOf = FunctionBind(TypedArrayOf, Int32Array);

export default Int32ArrayOf;
