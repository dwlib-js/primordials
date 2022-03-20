import GetIntrinsicOrThrow from '#intrinsics/GetIntrinsicOrThrow';
import BigUint64Array from './BigUint64Array.mjs';
import FunctionBind from './FunctionBind.mjs';

const TypedArrayOf = GetIntrinsicOrThrow('TypedArray.of');

const BigUint64ArrayOf = FunctionBind(TypedArrayOf, BigUint64Array);

export default BigUint64ArrayOf;
