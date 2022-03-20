import GetIntrinsicOrThrow from '#intrinsics/GetIntrinsicOrThrow';
import FunctionBind from './FunctionBind.mjs';
import Uint16Array from './Uint16Array.mjs';

const TypedArrayFrom = GetIntrinsicOrThrow('TypedArray.from');

const Uint16ArrayFrom = FunctionBind(TypedArrayFrom, Uint16Array);

export default Uint16ArrayFrom;
