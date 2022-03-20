import GetIntrinsicOrThrow from '#intrinsics/GetIntrinsicOrThrow';
import FunctionBind from './FunctionBind.mjs';
import Int8Array from './Int8Array.mjs';

const TypedArrayOf = GetIntrinsicOrThrow('TypedArray.of');

const Int8ArrayOf = FunctionBind(TypedArrayOf, Int8Array);

export default Int8ArrayOf;
