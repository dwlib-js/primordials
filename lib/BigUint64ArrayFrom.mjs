import GetIntrinsicOrThrow from '#intrinsics/GetIntrinsicOrThrow';
import BigUint64Array from './BigUint64Array.mjs';
import FunctionBind from './FunctionBind.mjs';

const TypedArrayFrom = GetIntrinsicOrThrow('TypedArray.from');

const BigUint64ArrayFrom = FunctionBind(TypedArrayFrom, BigUint64Array);

export default BigUint64ArrayFrom;
