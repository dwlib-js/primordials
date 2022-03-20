import GetIntrinsicOrThrow from '#intrinsics/GetIntrinsicOrThrow';
import FunctionBind from './FunctionBind.mjs';
import Int16Array from './Int16Array.mjs';

const TypedArrayFrom = GetIntrinsicOrThrow('TypedArray.from');

const Int16ArrayFrom = FunctionBind(TypedArrayFrom, Int16Array);

export default Int16ArrayFrom;
