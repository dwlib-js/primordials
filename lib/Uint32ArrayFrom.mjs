import GetIntrinsicOrThrow from '#intrinsics/GetIntrinsicOrThrow';
import FunctionBind from './FunctionBind.mjs';
import Uint32Array from './Uint32Array.mjs';

const TypedArrayFrom = GetIntrinsicOrThrow('TypedArray.from');

const Uint32ArrayFrom = FunctionBind(TypedArrayFrom, Uint32Array);

export default Uint32ArrayFrom;
