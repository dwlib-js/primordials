import GetIntrinsicOrThrow from '#intrinsics/GetIntrinsicOrThrow';
import FunctionBind from './FunctionBind.mjs';
import Int8Array from './Int8Array.mjs';

const TypedArrayFrom = GetIntrinsicOrThrow('TypedArray.from');

const Int8ArrayFrom = FunctionBind(TypedArrayFrom, Int8Array);

export default Int8ArrayFrom;
