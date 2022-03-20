import GetIntrinsicOrThrow from '#intrinsics/GetIntrinsicOrThrow';
import FunctionApplyBind from './FunctionApplyBind.mjs';

const ArrayPrototypeUnshift = GetIntrinsicOrThrow('Array.prototype.unshift');

const ArrayUnshiftApply = FunctionApplyBind(ArrayPrototypeUnshift);

export default ArrayUnshiftApply;
