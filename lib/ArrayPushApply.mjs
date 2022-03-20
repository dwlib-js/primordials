import GetIntrinsicOrThrow from '#intrinsics/GetIntrinsicOrThrow';
import FunctionApplyBind from './FunctionApplyBind.mjs';

const ArrayPrototypePush = GetIntrinsicOrThrow('Array.prototype.push');

const ArrayPushApply = FunctionApplyBind(ArrayPrototypePush);

export default ArrayPushApply;
