import GetIntrinsicOrThrow from '#intrinsics/GetIntrinsicOrThrow';
import FunctionBind from './FunctionBind.mjs';
import Int16Array from './Int16Array.mjs';

const TypedArrayOf = GetIntrinsicOrThrow('TypedArray.of');

const Int16ArrayOf = FunctionBind(TypedArrayOf, Int16Array);

export default Int16ArrayOf;
