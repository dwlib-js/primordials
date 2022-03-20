import GetIntrinsicOrThrow from '#intrinsics/GetIntrinsicOrThrow';
import FunctionBind from './FunctionBind.mjs';
import Uint8Array from './Uint8Array.mjs';

const TypedArrayFrom = GetIntrinsicOrThrow('TypedArray.from');

const Uint8ArrayFrom = FunctionBind(TypedArrayFrom, Uint8Array);

export default Uint8ArrayFrom;
